
using MinhaApi.Models;

namespace MinhaApi.Repositories;

public interface IFornecedorRepository
{
    IEnumerable<Fornecedores> GetAll();

    Fornecedores? GetById(int id);

    void Add(Fornecedores fornecedores);

    void Update(Fornecedores fornecedores);

    void Delete(int id);
}
