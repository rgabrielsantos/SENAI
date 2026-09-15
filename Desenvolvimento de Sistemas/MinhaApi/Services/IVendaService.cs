using MinhaApi.Models;
namespace MinhaApi.Services;
public interface IVendaService
{
    IEnumerable<Vendas> GetAll();
    Vendas? GetById(int id);
    Vendas Create(Vendas venda);

}
