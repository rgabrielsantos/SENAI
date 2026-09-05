/*1.
Interface (O Contrato)
Crie o contrato do repositório definindo as assinaturas dos 5 métodos do CRUD:

Listar todos
Buscar por ID
Adicionar
Atualizar
Deletar*/
using MinhaApi.Models;
namespace MinhaApi.Repositories;
public interface IClienteRepository
{
    public IEnumerable<Cliente> GetAll();
    Cliente? GetById(int id);
    void Add(Cliente cliente);
    void Update(Cliente cliente);
    void Delete(int id);

}
