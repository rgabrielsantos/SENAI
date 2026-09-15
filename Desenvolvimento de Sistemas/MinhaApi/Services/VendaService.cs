using MinhaApi.Models;
using MinhaApi.Repositories;
using MinhaApi.Services;

public class   VendaService : IVendaService

{
    private readonly IVendaRepository _repo;
    private readonly IProdutoRepository _produtoRepo;
    private readonly IClienteRepository _clienteRepo;

    public VendaService(IVendaRepository repo, IProdutoRepository produto,IClienteRepository cliente)
    {
        _repo = repo;
        _produtoRepo = produto;
        _clienteRepo = cliente;

    }

    public Vendas Create(Vendas venda)
    {
        Produto produto;

        if (venda.Valor_final < 0)
        {
            throw new ArgumentException("Preço inválido");
        }

        if (_clienteRepo.GetById(venda.Id_cliente) == null)
        {
            throw new ArgumentException("Cliente não existe");
        }

        produto = _produtoRepo.GetById(venda.Id_produto);

        if (produto == null)
        {
            throw new ArgumentException("Produto não existe");
        }

        if (produto.Estoque <= venda.Quantidade)
        {
            throw new ArgumentException("Estoque vazio");
        }

        venda.Valor_final = produto.Preco * venda.Quantidade;

        _repo.Add(venda);
        _produtoRepo.UpdateEstoque(venda.Quantidade, venda.Id_produto);
        return venda;
    }

    public IEnumerable<Vendas> GetAll()
    {
        return _repo.GetAll();
    }

    public Vendas? GetById(int id)
    {
        return _repo.GetById(id);
    }
}
