using MinhaApi.Models;

namespace MinhaApi.Services;

public interface IDepartamentoService
{

    IEnumerable<Departamento> GetAll();

    Departamento? GetById(int id);

    Departamento Create(Departamento departamento);

    Departamento? Update(int id, Departamento d);
    bool Delete(int id);
}
