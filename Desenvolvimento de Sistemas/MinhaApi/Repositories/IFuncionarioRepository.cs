
using MinhaApi.Models;

namespace MinhaApi.Repositories;

public interface IFuncionarioRepository
{
    IEnumerable<Funcionario> GetAll();
    Funcionario? GetById(int id);
    void Add(Funcionario f);
    void Update(Funcionario f);
    void Delete(int id);

}
