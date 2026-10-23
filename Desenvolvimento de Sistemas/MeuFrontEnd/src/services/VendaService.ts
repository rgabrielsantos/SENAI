import api from './api'
import type {
  Venda,
  VendaRequest,
} from '../types/Venda'

export const vendaService = {
  listar: async (): Promise<Venda[]> => {
    const { data } =
      await api.get('/venda')

    return data
  },

  criar: async (
    venda: VendaRequest
  ): Promise<Venda> => {
    const { data } =
      await api.post('/venda', venda)

    return data
  },

  buscar: async (
    id: number
  ): Promise<Venda> => {
    const { data } =
      await api.get(`/venda/${id}`)

    return data
  },
}
