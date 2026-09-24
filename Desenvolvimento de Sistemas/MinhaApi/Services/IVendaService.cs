using MinhaApi.DTO;
using MinhaApi.Models;
namespace MinhaApi.Services;
public interface IVendaService
{
    IEnumerable<Vendas> GetAll();
    Vendas? GetById(int id);
    VendaResponse Create(VendaRequest venda);

}
