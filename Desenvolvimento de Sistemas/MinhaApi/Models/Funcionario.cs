namespace MinhaApi.Models;

public class Funcionario
{
    public int Id_funcionario { get; set; }
    public string Nome { get; set; }
    public DateOnly Data_inicio { get; set; }
    public bool Ativo { get; set; } = true;

}
