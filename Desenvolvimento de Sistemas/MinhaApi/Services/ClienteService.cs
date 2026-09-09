using MinhaApi.Models;
using MinhaApi.Repositories;
using MinhaApi.Services;
public class ClienteService :
IClienteService
{
    private readonly IClienteRepository _repo;

    public ClienteService(IClienteRepository repo) => _repo = repo;

    public IEnumerable<Cliente> GetAll() => _repo.GetAll();
    public Cliente? GetById(int id) => _repo.GetById(id);
    public Cliente? Create(Cliente cliente)
    {
        if (cliente.Id < 0) throw new ArgumentException("Id Invalido");
        _repo.Add(cliente);
        return cliente;
    }
    public Cliente? Update(int id, Cliente cliente)
    {
        if (_repo.GetById(id) == null) return null;
        cliente.Id = id;
        _repo.Update(cliente);
        return cliente;
    }
    public bool Delete(int id)
    {
        if (_repo.GetById(id) == null) return false;
        _repo.Delete(id);
        return true;
    }
}
