using MinhaApi.Models;

namespace MinhaApi.Repositories;

public interface IVendaRepository
{
    void Add(Vendas venda);

    IEnumerable<Vendas> GetAll();
    Vendas? GetById(int id);
}
