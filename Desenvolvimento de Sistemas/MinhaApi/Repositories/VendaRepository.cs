using MySqlConnector;
using MinhaApi.Models;
namespace MinhaApi.Repositories;

public class VendaRepository : IVendaRepository
{
    private readonly string _connectionString;

    public VendaRepository(IConfiguration config)
    {
        _connectionString = config.GetConnectionString("DefaultConnection")!;


    }

    public void Add(Vendas vendas)
    {
        using var conn = new MySqlConnection(_connectionString);
        conn.Open();

        string sql = @"INSERT INTO
        vendas(id_cliente, id_produto,valor_final,data_venda,quantidade)
        VALUES
        (@Id_cliente, @Id_produto, @Valor_final, @Data_venda, @Quantidade);
        SELECT LAST_INSERT_ID();
        ";

        using var cmd = new MySqlCommand(sql, conn);

        cmd.Parameters.AddWithValue("@Id_cliente", vendas.Id_cliente);
        cmd.Parameters.AddWithValue("@Id_produto", vendas.Id_produto);
        cmd.Parameters.AddWithValue("@Valor_final", vendas.Valor_final);
        cmd.Parameters.AddWithValue("@Data_venda", vendas.Data_venda);
        cmd.Parameters.AddWithValue("@Quantidade", vendas.Quantidade);
        var idGerado = cmd.ExecuteScalar();
        vendas.Id_venda = Convert.ToInt32(idGerado);
    }


    public IEnumerable<Vendas> GetAll()
    {
        var lista = new List<Vendas>();

        using var conn = new MySqlConnection(_connectionString);

        conn.Open();

        string sql = @"
        SELECT id_venda, data_venda, quantidade, valor_final ,
        v.id_cliente, c.nome as cliente, id_produto, p.nome as produto
        FROM vendas v
        left JOIN cliente as c on v.id_cliente = c.Id
        left JOIN produtos as p on v.id_produto = p.id
        ;";

        using var cmd = new MySqlCommand(sql, conn);
        using var reader = cmd.ExecuteReader();

        while (reader.Read())
        {
            lista.Add(new Vendas
            {

                Id_venda = reader.GetInt32("id_venda"),
                Data_venda = reader.GetDateTime("data_venda"),
                Quantidade = reader.GetInt32("quantidade"),
                Valor_final = reader.GetDecimal("valor_final"),
                Id_cliente = reader.GetInt32("id_cliente"),
                nomeCliente = reader.GetString("cliente"),
                Id_produto = reader.GetInt32("id_produto"),
                nomeProduto = reader.GetString("produto")
            });
        }

        return lista;
    }

    public Vendas? GetById(int id)
    {

        using var conn = new MySqlConnection(_connectionString);

        conn.Open();

        string sql = @"
        SELECT id_venda, data_venda, quantidade, valor_final ,
        v.id_cliente, c.nome as cliente, id_produto, p.nome as produto
        FROM vendas v
        left JOIN cliente as c on v.id_cliente = c.Id
        left JOIN produtos as p on v.id_produto = p.id
        WHERE id_venda = @Id_venda;
        ";

        using var cmd = new MySqlCommand(sql, conn);
        cmd.Parameters.AddWithValue("@Id_venda", id);
        using var reader = cmd.ExecuteReader();


        if (reader.Read())
        {
            return new Vendas
            {
                Id_venda = reader.GetInt32("id_venda"),
                Data_venda = reader.GetDateTime("data_venda"),
                Quantidade = reader.GetInt32("quantidade"),
                Valor_final = reader.GetDecimal("valor_final"),
                Id_cliente = reader.GetInt32("id_cliente"),
                nomeCliente = reader.GetString("cliente"),
                Id_produto = reader.GetInt32("id_produto"),
                nomeProduto = reader.GetString("produto")
            };

        }
        return null;
    }
}
