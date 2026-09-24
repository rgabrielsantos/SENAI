
using MinhaApi.Models;
using MinhaApi.Repositories;

namespace MinhaApi.Services;

public class FornecedorService
 : IFornecedorService
{
    private readonly IFornecedorRepository _repo;

    public FornecedorService(IFornecedorRepository repo) => _repo = repo;

    public IEnumerable<Fornecedores> GetAll() => _repo.GetAll();

    public Fornecedores? GetById(int id) => _repo.GetById(id);

    public Fornecedores? Create(Fornecedores f)
    {
        if (f.Id_fornecedor < 0) throw new ArgumentException("Fornecedor não encontrado");

        _repo.Add(f);
        return f;
    }

    public Fornecedores? Update(int id, Fornecedores f)
    {
        if (_repo.GetById(id) == null) return null;
        f.Id_fornecedor = id;
        _repo.Update(f);
        return f;
    }

    public bool Delete(int id)
    {
        if (_repo.GetById(id) == null) return false;
        _repo.Delete(id);

        return true;
    }
}
