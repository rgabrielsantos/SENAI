// src/services/funcionarioService.ts

import { type Funcionario, type FuncionarioFormData } from '../types/Funcionario';

const BASE_URL = 'http://localhost:5077/api/Funcionario';

export const funcionarioService = {
  getAll: async (): Promise<Funcionario[]> => {
    const response = await fetch(BASE_URL);
    if (!response.ok) throw new Error('Erro ao buscar funcionários');
    return response.json();
  },

  getById: async (id: number): Promise<Funcionario> => {
    const response = await fetch(`${BASE_URL}/${id}`);
    if (!response.ok) throw new Error('Erro ao buscar funcionário');
    return response.json();
  },

  create: async (data: FuncionarioFormData): Promise<Funcionario> => {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Erro ao criar funcionário');
    return response.json();
  },

  update: async (id: number, data: FuncionarioFormData): Promise<void> => {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...data, id_funcionario: id }),
    });
    if (!response.ok) throw new Error('Erro ao atualizar funcionário');
  },

  delete: async (id: number): Promise<void> => {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Erro ao deletar funcionário');
  },
};
