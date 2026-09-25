using PreProva.Repositories;
using PreProva.Models;
namespace PreProva.Services;

public class ProdutoService
 : IProdutoService
{
    private readonly IProdutoRepository _repo;
    public ProdutoService(IProdutoRepository repo) => _repo = repo;
    public IEnumerable<Produto> GetAll()=> _repo.GetAll();
    public Produto? GetById(int id) => _repo.GetById(id);

    public Produto Create(Produto produto)
    {
        _repo.Add(produto);
        return produto;
    }

}
