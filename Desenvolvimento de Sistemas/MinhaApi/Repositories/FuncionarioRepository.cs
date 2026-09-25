using MinhaApi.Models;
using MySqlConnector;
namespace MinhaApi.Repositories;

public class FuncionarioRepository
: IFuncionarioRepository
{

    private readonly string _connectionString;

    public FuncionarioRepository(IConfiguration config) => _connectionString = config.GetConnectionString("DefaultConnection")!;

    public IEnumerable<Funcionario> GetAll()
    {
        var lista = new List<Funcionario>();

        using var conn = new MySqlConnection(_connectionString);
        conn.Open();

        string sql = @"
            SELECT id_funcionario, nome, data_inicio, ativo
            FROM funcionario
            ";

        using var cmd = new MySqlCommand(sql, conn);

        using var reader = cmd.ExecuteReader();
        while (reader.Read())
        {
            lista.Add(new Funcionario
            {
                Id_funcionario = reader.GetInt32("id_funcionario"),
                Nome = reader.GetString("nome"),
                Data_inicio = reader.GetDateOnly("data_inicio"),
                Ativo = reader.GetBoolean("ativo")

            });
        }
        return lista;
    }
    public Funcionario? GetById(int id)
    {
        using var conn = new MySqlConnection(_connectionString);
        conn.Open();

        string sql = @"
            SELECT id_funcionario, nome, data_inicio, ativo
            FROM funcionario
            WHERE id_funcionario = @Id;
            ";
        using var cmd = new MySqlCommand(sql, conn);

        cmd.Parameters.AddWithValue("Id", id);

        using var reader = cmd.ExecuteReader();
        if (reader.Read())
        {
            return new Funcionario
            {
                Id_funcionario = reader.GetInt32("id_departamento"),
                Nome = reader.GetString("nome"),
                Data_inicio = reader.GetDateOnly("data_inicio"),
                Ativo = reader.GetBoolean("ativo")
            };
        }
        return null;
    }

    public void Add(Funcionario f)
    {
        using var conn = new MySqlConnection(_connectionString);

        conn.Open();

        string sql = @"INSERT INTO
                        funcionario(nome,data_inicio,ativo)
                        VALUES
                        (@Nome,@Data_inicio,@Ativo);";
        using var cmd = new MySqlCommand(sql, conn);

        cmd.Parameters.AddWithValue("@Nome", f.Nome);
        cmd.Parameters.AddWithValue("@Descricao", f.Data_inicio);
        cmd.Parameters.AddWithValue("@Ativo", f.Ativo);

        var idGerado = cmd.ExecuteScalar();
        f.Id_funcionario = Convert.ToInt32(idGerado);
    }
    public void Update(Funcionario f)
    {
        using var conn = new MySqlConnection(_connectionString);
        conn.Open();

        string sql = @"UPDATE funcionario
                   SET nome = @Nome,data_inicio = @Data_inicio, ativo = @Ativo
                   WHERE id_funcionario = @Id";

        using var cmd = new MySqlCommand(sql, conn);
        cmd.Parameters.AddWithValue("@Id", f.Id_funcionario);
        cmd.Parameters.AddWithValue("@Nome", f.Nome);
        cmd.Parameters.AddWithValue("@Data_inicio", f.Data_inicio);
        cmd.Parameters.AddWithValue("@Ativo", f.Ativo);
        cmd.ExecuteNonQuery();
    }
    public void Delete(int id)
    {
        using var conn = new MySqlConnection(_connectionString);
        conn.Open();

        string sql = @"Update funcionario
            set ativo = false
            WHERE id_funcionario = @Id";

        using var cmd = new MySqlCommand(sql, conn);
        cmd.Parameters.AddWithValue("@Id", id);
        cmd.ExecuteNonQuery();
    }
}
