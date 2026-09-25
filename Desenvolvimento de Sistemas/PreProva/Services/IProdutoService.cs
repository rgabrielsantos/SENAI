using PreProva.Models;
namespace PreProva.Services;

public interface IProdutoService
{
    IEnumerable<Produto> GetAll();
    Produto? GetById(int id);
    Produto Create(Produto produto);
}
