using PreProva.Models;
using MySqlConnector;
namespace PreProva.Repositories;

public class ProdutoRepository
 : IProdutoRepository
{
    private readonly string _connectionString;

    public ProdutoRepository(IConfiguration config) => _connectionString = config.GetConnectionString("DefaultConnection")!;

    public IEnumerable<Produto> GetAll()
    {
        var lista = new List<Produto>();

        using var conn = new MySqlConnection(_connectionString);
        conn.Open();

        string sql = @"
        SELECT
        id_produto,
        nome,
        preco,
        estoque,
        ativo
        FROM produto;
        ";

        using var cmd = new MySqlCommand(sql, conn);
        using var reader = cmd.ExecuteReader();

        while (reader.Read())
        {
            lista.Add(new Produto
            {
                Id_produto = reader.GetInt32("id_produto"),
                Nome = reader.GetString("nome"),
                Preco = reader.GetDecimal("preco"),
                Estoque = reader.GetInt32("estoque"),
                Ativo = reader.GetBoolean("ativo")
            });
        }
        return lista;
    }

    public Produto? GetById(int id)
    {
        using var conn = new MySqlConnection(_connectionString);
        conn.Open();

        string sql = @"
        SELECT
        id_produto,
        nome,
        preco,
        estoque,
        ativo
        FROM produto
        WHERE id_produto = @id;
        ";

        using var cmd = new MySqlCommand(sql, conn);
        cmd.Parameters.AddWithValue("@id", id);

        using var reader = cmd.ExecuteReader();

        if (reader.Read())
        {
            return new Produto
            {
                Id_produto = reader.GetInt32("id_produto"),
                Nome = reader.GetString("nome"),
                Preco = reader.GetDecimal("preco"),
                Estoque = reader.GetInt32("estoque"),
                Ativo = reader.GetBoolean("ativo")
            };
        }

        return null;
    }

    public void Add(Produto p)
    {
        using var conn = new MySqlConnection(_connectionString);
        conn.Open();

        string sql = @"
        INSERT INTO produto
        (nome,preco,estoque)
        VALUES
        (@Nome,@Preco,@Estoque);
        ";

        using var cmd = new MySqlCommand(sql, conn);

        cmd.Parameters.AddWithValue("@Nome", p.Nome);
        cmd.Parameters.AddWithValue("@Preco", p.Preco);
        cmd.Parameters.AddWithValue("@Estoque", p.Estoque);

        var idGerado = cmd.ExecuteScalar();
        p.Id_produto = Convert.ToInt32(idGerado);

    }

    public void Update(int id, Produto p)
    {
        using var conn = new MySqlConnection(_connectionString);
        conn.Open();

        string sql = @"
        UPDATE produto
        SET
        nome = @Nome,
        preco = @Preco,
        estoque = @Estoque
        WHERE id_produto = @id;
        ";

        using var cmd = new MySqlCommand(sql, conn);

        cmd.Parameters.AddWithValue("@Nome", p.Nome);

    }
}
