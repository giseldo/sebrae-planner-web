
import { useState, useEffect } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';
import { toast } from 'sonner';

interface PlanningSession {
  id: string;
  title: string;
  description: string | null;
  created_at: string;
  updated_at: string;
}

export const usePlanningSessions = () => {
  const { user } = useAuth();
  const queryClient = useQueryClient();

  const { data: sessions, isLoading } = useQuery({
    queryKey: ['planning-sessions', user?.id],
    queryFn: async () => {
      if (!user) return [];
      
      const { data, error } = await supabase
        .from('planning_sessions')
        .select('*')
        .order('updated_at', { ascending: false });

      if (error) {
        console.error('Error fetching planning sessions:', error);
        throw error;
      }

      return data as PlanningSession[];
    },
    enabled: !!user,
  });

  const createSession = useMutation({
    mutationFn: async ({ title, description }: { title: string; description?: string }) => {
      if (!user) throw new Error('User not authenticated');

      const { data, error } = await supabase
        .from('planning_sessions')
        .insert([
          {
            title,
            description: description || null,
            user_id: user.id,
          },
        ])
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['planning-sessions'] });
      toast.success('Sessão de planejamento criada com sucesso!');
    },
    onError: (error) => {
      console.error('Error creating planning session:', error);
      toast.error('Erro ao criar sessão de planejamento');
    },
  });

  const updateSession = useMutation({
    mutationFn: async ({ id, title, description }: { id: string; title: string; description?: string }) => {
      const { data, error } = await supabase
        .from('planning_sessions')
        .update({
          title,
          description: description || null,
          updated_at: new Date().toISOString(),
        })
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['planning-sessions'] });
      toast.success('Sessão atualizada com sucesso!');
    },
    onError: (error) => {
      console.error('Error updating planning session:', error);
      toast.error('Erro ao atualizar sessão');
    },
  });

  const deleteSession = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase
        .from('planning_sessions')
        .delete()
        .eq('id', id);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['planning-sessions'] });
      toast.success('Sessão excluída com sucesso!');
    },
    onError: (error) => {
      console.error('Error deleting planning session:', error);
      toast.error('Erro ao excluir sessão');
    },
  });

  return {
    sessions: sessions || [],
    isLoading,
    createSession: createSession.mutate,
    updateSession: updateSession.mutate,
    deleteSession: deleteSession.mutate,
    isCreating: createSession.isPending,
    isUpdating: updateSession.isPending,
    isDeleting: deleteSession.isPending,
  };
};
