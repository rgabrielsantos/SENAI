using MinhaApi.Repositories;
using MinhaApi.Models;
namespace MinhaApi.Services;

public class FuncionarioService
 : IFuncionarioService
{

    private readonly IFuncionarioRepository _repo;

    public FuncionarioService(IFuncionarioRepository repo) => _repo = repo;

    public IEnumerable<Funcionario> GetAll()
    {
        var funcionarios = _repo.GetAll();
        return funcionarios;
    }

    public Funcionario? GetById(int id)
    {
        var funcionario = _repo.GetById(id);
        return funcionario;
    }

    public Funcionario Create(Funcionario f)
    {
        if (f.Nome == null) throw new ArgumentException("O campo nome é  obrigatorio!!");

        return f;
    }

    public Funcionario? Update(int id, Funcionario f)
    {
        f.Id_funcionario = id;
        _repo.Update(f);
        return f;
    }
    public bool Delete(int id)
    {
        _repo.Delete(id);
        return true;
    }
}
