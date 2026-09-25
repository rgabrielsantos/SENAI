namespace MinhaApi.Models;

public class Departamento
{
    public int Id_departamento { get; set; }

    public int Id_funcionario { get; set; }

    public string Nome { get; set; } = string.Empty;

    public string Descricao { get; set; }

    public bool Status { get; set; } = true;
}
