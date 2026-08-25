using MinhaApi.Models;

namespace MinhaApi.Services;

public class TipoService : ITipoService
{
    private static readonly List<Tipo> _db = new()
    {
        new Tipo { Id = 1, Nome = "Eletrônicos" },
        new Tipo { Id = 2, Nome = "Acessórios" }
    };

    public IEnumerable<Tipo> GetAll() => _db;

    public Tipo? GetById(int id) => _db.FirstOrDefault(t => t.Id == id);

    public Tipo Create(Tipo tipo)
    {
        if (string.IsNullOrWhiteSpace(tipo.Nome))
            throw new ArgumentException("Nome do tipo é obrigatório");

        tipo.Id = _db.Any() ? _db.Max(t => t.Id) + 1 : 1;
        _db.Add(tipo);
        return tipo;
    }

    public Tipo? Update(int id, Tipo tipo)
    {
        var atual = _db.FirstOrDefault(t => t.Id == id);
        if (atual == null) return null;

        atual.Nome = tipo.Nome;
        return atual;
    }

    public bool Delete(int id)
    {
        var tipo = _db.FirstOrDefault(t => t.Id == id);
        if (tipo == null) return false;

        _db.Remove(tipo);
        return true;
    }
}
