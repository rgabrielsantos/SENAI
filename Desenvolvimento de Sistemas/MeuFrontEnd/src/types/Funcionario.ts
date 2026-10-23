// src/types/Funcionario.ts

export interface Funcionario {
  id_funcionario: number;
  nome: string;
  data_inicio: string;
  ativo: boolean;
}

export interface FuncionarioFormData {
  nome: string;
  data_inicio: string;
  ativo: boolean;
}
