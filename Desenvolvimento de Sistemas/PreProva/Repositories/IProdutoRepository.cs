using PreProva.Models;

namespace PreProva.Repositories;

public interface IProdutoRepository
{
    IEnumerable<Produto> GetAll();

    Produto? GetById(int id);
    void Add(Produto produto);

    void Update(int id, Produto produto);
}
