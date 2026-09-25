using MinhaApi.Models;
using MySqlConnector;
namespace MinhaApi.Repositories;

public class DepartamentoRepository
: IDepartamentoRepository
{

    private readonly string _connectionString;

    public DepartamentoRepository(IConfiguration config) => _connectionString = config.GetConnectionString("DefaultConnection")!;

    public IEnumerable<Departamento> GetAll()
    {
        var lista = new List<Departamento>();

        using var conn = new MySqlConnection(_connectionString);
        conn.Open();

        string sql = @"
            SELECT id_departamento, nome, descricao, status
            FROM departamento
            ";

        using var cmd = new MySqlCommand(sql, conn);

        using var reader = cmd.ExecuteReader();
        while (reader.Read())
        {
            lista.Add(new Departamento
            {
                Id_departamento = reader.GetInt32("id_departamento"),
                Nome = reader.GetString("nome"),
                Descricao = reader.GetString("descricao"),
                Ativo = reader.GetBoolean("status")

            });
        }
        return lista;
    }
    public Departamento? GetById(int id)
    {
        using var conn = new MySqlConnection(_connectionString);
        conn.Open();

        string sql = @"
            SELECT id_departamento, nome, descricao, status
            FROM departamento
            WHERE id_departamento = @Id;
            ";
        using var cmd = new MySqlCommand(sql, conn);

        cmd.Parameters.AddWithValue("Id", id);

        using var reader = cmd.ExecuteReader();
        if (reader.Read())
        {
            return new Departamento
            {
                Id_departamento = reader.GetInt32("id_departamento"),
                Nome = reader.GetString("nome"),
                Descricao = reader.GetString("descricao"),
                Ativo = reader.GetBoolean("status")
            };
        }
        return null;
    }

    public void Add(Departamento d)
    {
        using var conn = new MySqlConnection(_connectionString);

        conn.Open();

        string sql = @"INSERT INTO
                        departamento(nome,descricao)
                        VALUES
                        (@Nome,@Descricao);";
        using var cmd = new MySqlCommand(sql, conn);

        cmd.Parameters.AddWithValue("@Nome", d.Nome);
        cmd.Parameters.AddWithValue("@Descricao", d.Descricao);

        var idGerado = cmd.ExecuteScalar();
        d.Id_departamento = Convert.ToInt32(idGerado);
    }
    public void Update(Departamento d)
    {
        using var conn = new MySqlConnection(_connectionString);
        conn.Open();

        string sql = @"UPDATE departamento
                   SET nome = @Nome,descricao = @Descricao, status = @Status
                   WHERE id_departamento = @Id";
        using var cmd = new MySqlCommand(sql, conn);
        cmd.Parameters.AddWithValue("@Id", d.Id_departamento);
        cmd.Parameters.AddWithValue("@Nome", d.Nome);
        cmd.Parameters.AddWithValue("@Descricao", d.Descricao);
        cmd.Parameters.AddWithValue("@Status", d.Ativo);
        cmd.ExecuteNonQuery();
    }
    public void Delete(int id)
    {
        using var conn = new MySqlConnection(_connectionString);
        conn.Open();

        string sql = @"Update departamento
            set status = false
            WHERE id_departamento = @Id";

        using var cmd = new MySqlCommand(sql, conn);
        cmd.Parameters.AddWithValue("@Id", id);
        cmd.ExecuteNonQuery();
    }
}
