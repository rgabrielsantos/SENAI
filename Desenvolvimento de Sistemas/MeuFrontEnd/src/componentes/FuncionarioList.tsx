// src/components/FuncionarioList.tsx

import { type Funcionario } from '../types/Funcionario';

interface FuncionarioListProps {
  funcionarios: Funcionario[];
  loading: boolean;
  error: string;
  onEdit: (funcionario: Funcionario) => void;
  onDelete: (id: number) => void;
}

export function FuncionarioList({ funcionarios, loading, error, onEdit, onDelete }: FuncionarioListProps) {
  const handleDelete = (id: number) => {
    if (window.confirm('Tem certeza que deseja deletar este funcionário?')) {
      onDelete(id);
    }
  };

  if (loading) {
    return (
      <div className="list-state">
        <p>Carregando funcionários...</p>
      </div>
    );
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="data-card">
      <div className="data-card-header">
        <div>
          <h2>Funcionários Cadastrados</h2>
          <span>{funcionarios.length} funcionário(s) encontrado(s)</span>
        </div>
      </div>

      {funcionarios.length === 0 ? (
        <div className="list-state">
          <p>Nenhum funcionário cadastrado</p>
        </div>
      ) : (
        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Data de Início</th>
                <th>Status</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {funcionarios.map((func) => (
                <tr key={func.id_funcionario}>
                  <td>#{func.id_funcionario}</td>
                  <td>{func.nome}</td>
                  <td>{new Date(func.data_inicio).toLocaleDateString('pt-BR')}</td>
                  <td>
                    <span
                      style={{
                        color: func.ativo ? '#16a34a' : '#dc2626',
                        fontWeight: 600,
                      }}
                    >
                      {func.ativo ? 'Ativo' : 'Inativo'}
                    </span>
                  </td>
                  <td>
                    <div className="product-actions">
                      <button
                        className="action-btn btn-edit"
                        onClick={() => onEdit(func)}
                      >
                        ✏️ Editar
                      </button>
                      <button
                        className="action-btn btn-delete"
                        onClick={() => handleDelete(func.id_funcionario)}
                      >
                        🗑️ Deletar
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
