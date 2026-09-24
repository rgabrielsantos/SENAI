namespace MinhaApi.DTO;

public class VendaResponse
{
    public int Id_venda { get; set; }
    public decimal Valor_final { get; set; }
    public DateTime Data_venda { get; set; }

    public string nomeCliente { get; set; }
    public string nomeProduto { get; set; }
}
