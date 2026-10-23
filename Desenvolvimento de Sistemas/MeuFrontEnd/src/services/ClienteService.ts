import api from './api'

import { type Cliente, type NovoCliente,} from '../types/Cliente'

export const clienteService = {

  // =====================================================
  // LISTAR CLIENTES
  // =====================================================

  listar: async (): Promise<Cliente[]> => {
    const { data } = await api.get('/cliente')

    return data
  },

  // =====================================================
  // CRIAR CLIENTE
  // =====================================================

  criar: async (
    cliente: NovoCliente
  ): Promise<Cliente> => {

    const { data } = await api.post(
      '/cliente',
      cliente
    )

    return data
  },

  // =====================================================
  // EDITAR CLIENTE
  // =====================================================

  editar: async (
    id: number,
    cliente: NovoCliente
  ): Promise<Cliente> => {

    const { data } = await api.put(
      `/cliente/${id}`,
      cliente
    )

    return data
  },

  // =====================================================
  // EXCLUIR CLIENTE
  // =====================================================

  excluir: async (
    id: number
  ): Promise<void> => {

    await api.delete(
      `/cliente/${id}`
    )
  },
}
