export interface Venda {
  id_venda: number
  id_cliente: number
  id_produto: number
  valor_final: number
  data_venda: string
  quantidade: number
  nomeProduto: string
  nomeCliente: string
}

export interface VendaRequest {
  id_cliente: number
  id_produto: number
  quantidade: number
}
