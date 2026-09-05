using MinhaApi.Models;

namespace MinhaApi.Services;

public interface IClienteService
{
    public IEnumerable<Cliente> GetAll();
    Cliente? GetById(int id);
    Cliente? Create(Cliente cliente);
    Cliente? Update(Cliente cliente);
    bool Delete(int id);
}
