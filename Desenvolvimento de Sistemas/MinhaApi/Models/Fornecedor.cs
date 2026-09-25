namespace MinhaApi.Models;

public class Fornecedores
{
    public int Id_fornecedor { get; set; }

    public int Id_produto{ get; set;}

    public string Cnpj { get; set; } = string.Empty;

    public DateOnly Data_cadastro { get; set; }

    public string Email { get; set; } = string.Empty;

    public string Telefone { get; set; } = string.Empty;

    public bool Ativo { get; set; } = true;

    public string Nome { get; set; } = string.Empty;
}
