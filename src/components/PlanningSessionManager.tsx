
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { usePlanningSessions } from '@/hooks/usePlanningSessions';
import { Plus, Edit, Trash2 } from 'lucide-react';

const PlanningSessionManager = () => {
  const { sessions, isLoading, createSession, updateSession, deleteSession } = usePlanningSessions();
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [editingSession, setEditingSession] = useState<any>(null);
  const [formData, setFormData] = useState({ title: '', description: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title.trim()) return;

    if (editingSession) {
      updateSession({
        id: editingSession.id,
        title: formData.title,
        description: formData.description,
      });
      setEditingSession(null);
    } else {
      createSession({
        title: formData.title,
        description: formData.description,
      });
      setIsCreateOpen(false);
    }

    setFormData({ title: '', description: '' });
  };

  const handleEdit = (session: any) => {
    setEditingSession(session);
    setFormData({
      title: session.title,
      description: session.description || '',
    });
  };

  const handleDelete = (id: string) => {
    if (confirm('Tem certeza que deseja excluir esta sessão?')) {
      deleteSession(id);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-sebrae-blue"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-sebrae-navy">Minhas Sessões de Planejamento</h2>
        <Dialog open={isCreateOpen} onOpenChange={setIsCreateOpen}>
          <DialogTrigger asChild>
            <Button className="bg-sebrae-blue hover:bg-sebrae-blue/90">
              <Plus className="h-4 w-4 mr-2" />
              Nova Sessão
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Criar Nova Sessão de Planejamento</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="title">Título *</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="Ex: Planejamento Estratégico 2024"
                  required
                />
              </div>
              <div>
                <Label htmlFor="description">Descrição</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Descreva os objetivos desta sessão..."
                  rows={3}
                />
              </div>
              <div className="flex justify-end space-x-2">
                <Button type="button" variant="outline" onClick={() => setIsCreateOpen(false)}>
                  Cancelar
                </Button>
                <Button type="submit" className="bg-sebrae-blue hover:bg-sebrae-blue/90">
                  Criar Sessão
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {sessions.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <p className="text-gray-500 text-center mb-4">
              Você ainda não criou nenhuma sessão de planejamento.
            </p>
            <Button 
              onClick={() => setIsCreateOpen(true)}
              className="bg-sebrae-blue hover:bg-sebrae-blue/90"
            >
              <Plus className="h-4 w-4 mr-2" />
              Criar Primeira Sessão
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4">
          {sessions.map((session) => (
            <Card key={session.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-sebrae-navy">{session.title}</CardTitle>
                    {session.description && (
                      <p className="text-gray-600 mt-2">{session.description}</p>
                    )}
                    <p className="text-sm text-gray-400 mt-2">
                      Criado em: {new Date(session.created_at).toLocaleDateString('pt-BR')}
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleEdit(session)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDelete(session.id)}
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      )}

      {editingSession && (
        <Dialog open={!!editingSession} onOpenChange={() => setEditingSession(null)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Editar Sessão de Planejamento</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="edit-title">Título *</Label>
                <Input
                  id="edit-title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                />
              </div>
              <div>
                <Label htmlFor="edit-description">Descrição</Label>
                <Textarea
                  id="edit-description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={3}
                />
              </div>
              <div className="flex justify-end space-x-2">
                <Button type="button" variant="outline" onClick={() => setEditingSession(null)}>
                  Cancelar
                </Button>
                <Button type="submit" className="bg-sebrae-blue hover:bg-sebrae-blue/90">
                  Salvar Alterações
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default PlanningSessionManager;
