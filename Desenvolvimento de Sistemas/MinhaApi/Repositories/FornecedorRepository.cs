using MinhaApi.Models;
using MySqlConnector;
namespace MinhaApi.Repositories;

public class FornecedorRepository
 : IFornecedorRepository
{
    private readonly string _connectionString;

    public FornecedorRepository(IConfiguration config) => _connectionString = config.GetConnectionString("DefaultConnection")!;


    public IEnumerable<Fornecedores> GetAll()
    {
        var lista = new List<Fornecedores>();

        using var conn = new MySqlConnection(_connectionString);
        conn.Open();

        string sql = @"
            SELECT id_fornecedor,id_produto, cnpj, data_cadastro, email, telefone, ativo
            FROM fornecedores;
            ";

        using var cmd = new MySqlCommand(sql, conn);

        using var reader = cmd.ExecuteReader();
        while (reader.Read())
        {
            lista.Add(new Fornecedores
            {
                Id_fornecedor = reader.GetInt32("id_fornecedor"),
                Id_produto = reader.GetInt32("id_produto"),
                Data_cadastro = reader.GetDateOnly("data_cadastro"),
                Cnpj = reader.GetString("cnpj"),
                Email = reader.GetString("email"),
                Telefone = reader.GetString("telefone"),
                Ativo = reader.GetBoolean("ativo")
            });
        }
        return lista;
    }

    public Fornecedores? GetById(int id)
    {
        using var conn = new MySqlConnection(_connectionString);
        conn.Open();

        string sql = @"
            SELECT id_fornecedor, id_produto, cnpj, data_cadastro, email, telefone, ativo
            FROM fornecedores
            WHERE id_fornecedor = @id";

        using var cmd = new MySqlCommand(sql, conn);

        cmd.Parameters.AddWithValue("@Id", id);

        using var reader = cmd.ExecuteReader();

        if (reader.Read())
        {
            return new Fornecedores
            {
                Id_fornecedor = reader.GetInt32("id_fornecedor"),
                Id_produto = reader.GetInt32("id_produto"),
                Data_cadastro = reader.GetDateOnly("data_cadastro"),
                Cnpj = reader.GetString("cnpj"),
                Email = reader.GetString("email"),
                Telefone = reader.GetString("telefone"),
                Ativo = reader.GetBoolean("ativo")
            };
        }

        return null;
    }

    public void Add(Fornecedores f)
    {
        using var conn = new MySqlConnection(_connectionString);

        conn.Open();

        string sql = @"INSERT INTO
                        fornecedores(id_produto, cnpj,data_cadastro, email, telefone,ativo)
                        VALUES
                        (@Id_produto, @Cnpj, @Data_cadastro, @Email, @Telefone, @Ativo);";
        using var cmd = new MySqlCommand(sql, conn);

        cmd.Parameters.AddWithValue("@Id_produto", f.Id_produto);

        cmd.Parameters.AddWithValue("@Cnpj", f.Cnpj);
        cmd.Parameters.AddWithValue("@Email", f.Email);
        cmd.Parameters.AddWithValue("@Data_cadastro", f.Data_cadastro);
        cmd.Parameters.AddWithValue("@Telefone", f.Telefone);
        cmd.Parameters.AddWithValue("@Ativo", f.Ativo);

        var idGerado = cmd.ExecuteScalar();
        f.Id_fornecedor = Convert.ToInt32(idGerado);
    }
    public void Update(Fornecedores f)
    {
        using var conn = new MySqlConnection(_connectionString);
        conn.Open();

        string sql = @"UPDATE fornecedores
                   SET id_produto = @Id_produto, email = @Email, telefone = @Telefone, cnpj = @Cnpj,  ativo = @Ativo
                   WHERE id_fornecedor = @Id_fornecedor";
        using var cmd = new MySqlCommand(sql, conn);
        cmd.Parameters.AddWithValue("@Id_produto", f.Id_produto);
        cmd.Parameters.AddWithValue("@Cnpj", f.Cnpj);
        cmd.Parameters.AddWithValue("@Email", f.Email);
        cmd.Parameters.AddWithValue("@Telefone", f.Telefone);
        cmd.Parameters.AddWithValue("@Ativo", f.Ativo);
        cmd.Parameters.AddWithValue("@Id_fornecedor", f.Id_fornecedor);
        cmd.ExecuteNonQuery();
    }
    public void Delete(int id)
    {
        using var conn = new MySqlConnection(_connectionString);
        conn.Open();

        string sql = @"Update fornecedores
            set ativo = false
            WHERE id_fornecedor = @Id_fornecedor";

        using var cmd = new MySqlCommand(sql, conn);
        cmd.Parameters.AddWithValue("@Id_fornecedor", id);
        cmd.ExecuteNonQuery();
    }
}
