// src/components/FuncionarioForm.tsx

import { useState, useEffect } from 'react';
import { type Funcionario, type FuncionarioFormData } from '../types/Funcionario';
import { funcionarioService } from '../services/FuncionarioService';

interface FuncionarioFormProps {
  funcionario?: Funcionario | null;
  onSuccess: () => void;
  onCancel: () => void;
}

export function FuncionarioForm({ funcionario, onSuccess, onCancel }: FuncionarioFormProps) {
  const [formData, setFormData] = useState<FuncionarioFormData>({
    nome: '',
    data_inicio: '',
    ativo: true,
  });
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (funcionario) {
      setFormData({
        nome: funcionario.nome,
        data_inicio: funcionario.data_inicio,
        ativo: funcionario.ativo,
      });
    } else {
      setFormData({
        nome: '',
        data_inicio: '',
        ativo: true,
      });
    }
  }, [funcionario]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (funcionario) {
        await funcionarioService.update(funcionario.id_funcionario, formData);
      } else {
        await funcionarioService.create(formData);
      }
      onSuccess();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao salvar funcionário');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card">
      <div className="form-header">
        <div className="form-icon"></div>
        <div>
          <h2>{funcionario ? 'Editar Funcionário' : 'Novo Funcionário'}</h2>
          <p>Preencha os dados do funcionário</p>
        </div>
      </div>

      {error && <div className="form-error">{error}</div>}

      <form onSubmit={handleSubmit} className="funcionario-form">
        <div className="form-fields">
          <div className="form-field">
            <label htmlFor="nome">Nome</label>
            <input
              id="nome"
              type="text"
              value={formData.nome}
              onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
              required
              placeholder="Digite o nome completo"
            />
          </div>

          <div className="form-field">
            <label htmlFor="data_inicio">Data de Início</label>
            <input
              id="data_inicio"
              type="date"
              value={formData.data_inicio}
              onChange={(e) => setFormData({ ...formData, data_inicio: e.target.value })}
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="ativo">Status</label>
            <select
              id="ativo"
              value={formData.ativo ? 'true' : 'false'}
              onChange={(e) => setFormData({ ...formData, ativo: e.target.value === 'true' })}
            >
              <option value="true">Ativo</option>
              <option value="false">Inativo</option>
            </select>
          </div>
        </div>

        <div className="form-footer">
          <button type="button" onClick={onCancel}>
            Cancelar
          </button>
          <button type="submit" disabled={loading}>
            {loading ? 'Salvando...' : funcionario ? 'Atualizar' : 'Cadastrar'}
          </button>
        </div>
      </form>
    </div>
  );
}
