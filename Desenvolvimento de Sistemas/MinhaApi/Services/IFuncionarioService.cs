using MinhaApi.Models;

namespace MinhaApi.Services;

public interface IFuncionarioService
{

    IEnumerable<Funcionario> GetAll();

    Funcionario? GetById(int id);

    Funcionario Create(Funcionario funcionario);

    Funcionario? Update(int id, Funcionario f);
    bool Delete(int id);
}
