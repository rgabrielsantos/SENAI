namespace MinhaApi.Models;

public class Vendas
{
    public int Id_venda { get; set; }
    public int Id_cliente { get; set; }
    public int Id_produto { get; set; }
    public decimal Valor_final { get; set; }
    public DateTime Data_venda { get; set; }
    public int Quantidade { get; set; }

    public string nomeProduto { get; set; }
    public string nomeCliente { get; set; }



}
