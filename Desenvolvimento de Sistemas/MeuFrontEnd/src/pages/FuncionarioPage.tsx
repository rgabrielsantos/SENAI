// src/pages/FuncionarioPage.tsx

import { useState, useEffect } from 'react';
import { type Funcionario } from '../types/Funcionario';
import { funcionarioService } from '../services/FuncionarioService';
import { FuncionarioForm } from '../componentes/FuncionarioForm';
import { FuncionarioList } from '../componentes/FuncionarioList';

export function FuncionarioPage() {
  const [funcionarios, setFuncionarios] = useState<Funcionario[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');
  const [editingFuncionario, setEditingFuncionario] = useState<Funcionario | null>(null);

  const loadFuncionarios = async () => {
    try {
      setLoading(true);
      const data = await funcionarioService.getAll();
      setFuncionarios(data);
      setError('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao carregar funcionários');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadFuncionarios();
  }, []);

  const handleSuccess = () => {
    setEditingFuncionario(null);
    loadFuncionarios();
  };

  const handleCancel = () => {
    setEditingFuncionario(null);
  };

  const handleEdit = (funcionario: Funcionario) => {
    setEditingFuncionario(funcionario);
    // Rola a página para o topo onde está o formulário
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id: number) => {
    try {
      await funcionarioService.delete(id);
      await loadFuncionarios();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao deletar funcionário');
    }
  };

  return (
    <div className="page">
      <div className="page-header">
        <h1>Funcionários</h1>
        <p>Gerencie os funcionários da empresa</p>
      </div>

      {/* Formulário sempre visível no topo */}
      <FuncionarioForm
        funcionario={editingFuncionario}
        onSuccess={handleSuccess}
        onCancel={handleCancel}
      />

      {/* Lista embaixo */}
      <FuncionarioList
        funcionarios={funcionarios}
        loading={loading}
        error={error}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}
