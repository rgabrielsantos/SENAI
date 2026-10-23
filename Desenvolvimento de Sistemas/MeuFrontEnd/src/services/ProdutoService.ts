import api from './api'

import {
  type NovoProduto,
  type Produto,
} from '../types/Produto'

export const produtoService = {

  // =====================================================
  // LISTAR PRODUTOS
  // =====================================================

  listar: async (): Promise<Produto[]> => {

    const { data } =
      await api.get('/produto')

    return data

  },

  // =====================================================
  // CRIAR PRODUTO
  // =====================================================

  criar: async (
    produto: NovoProduto
  ): Promise<Produto> => {

    const { data } =
      await api.post(
        '/produto',
        produto
      )

    return data

  },

  // =====================================================
  // EDITAR PRODUTO
  // =====================================================

  editar: async (
    id: number,
    produto: NovoProduto
  ): Promise<Produto> => {

    const { data } =
      await api.put(
        `/produto/${id}`,
        produto
      )

    return data

  },

  // =====================================================
  // EXCLUIR PRODUTO
  // =====================================================

  excluir: async (
    id: number
  ): Promise<void> => {

    await api.delete(
      `/produto/${id}`
    )

  },

}
