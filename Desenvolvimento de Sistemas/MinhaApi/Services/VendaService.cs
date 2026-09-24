using MinhaApi.Models;
using MinhaApi.Repositories;
using MinhaApi.Services;
using MinhaApi.DTO;

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

    public VendaResponse Create(VendaRequest venda)
    {
        Produto produto;

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

        Vendas vendaModel = new Vendas();
        vendaModel.Valor_final = produto.Preco * venda.Quantidade;
        vendaModel.Id_cliente = venda.Id_cliente;
        vendaModel.Id_produto = venda.Id_produto;
        vendaModel.Quantidade = venda.Quantidade;

        _repo.Add(vendaModel);
        _produtoRepo.UpdateEstoque(venda.Quantidade, venda.Id_produto);

        Vendas retorno = _repo.GetById(vendaModel.Id_venda);
        return new VendaResponse
        {
            nomeCliente = retorno.nomeCliente,
            Data_venda = retorno.Data_venda,
            Id_venda = retorno.Id_venda,
            nomeProduto = retorno.nomeProduto,
            Valor_final = retorno.Valor_final,
        };

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
