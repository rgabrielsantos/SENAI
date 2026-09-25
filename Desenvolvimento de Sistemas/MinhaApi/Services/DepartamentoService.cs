using MinhaApi.Repositories;
using MinhaApi.Models;
using Microsoft.AspNetCore.Mvc;
namespace MinhaApi.Services;

public class DepartamentoService
 : IDepartamentoService
{

    private readonly IDepartamentoRepository _repo;

    public DepartamentoService(IDepartamentoRepository repo) => _repo = repo;

    public IEnumerable<Departamento> GetAll()
    {
        var departamentos = _repo.GetAll();
        return departamentos;
    }

    public Departamento? GetById(int id)
    {
        var departamento = _repo.GetById(id);
        return departamento;
    }

    public Departamento Create([FromBody]Departamento departamento)
    {
        _repo.Add(departamento);
        return departamento;
    }

    public Departamento? Update(int id, [FromBody]Departamento d)
    {
        d.Id_departamento = id;
        _repo.Update(d);
        return d;
    }
    public bool Delete(int id)
    {
        _repo.Delete(id);
        return true;
    }
}
