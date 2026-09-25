namespace PreProva.Models;

public class Produto
{
    public int Id_produto { get; set; }
    public string Nome { get; set; } = string.Empty;

    public bool Ativo { get; set; } = true;

    public decimal Preco { get; set; }

    public int Estoque { get; set; }

}
