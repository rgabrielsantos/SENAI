using Microsoft.AspNetCore.Mvc;
using MinhaApi.Models;
using MinhaApi.Services;

[ApiController]
[Route("api/[controller]")]

public class FuncionarioController
 : ControllerBase
{
    private readonly IFuncionarioService _service;

    public FuncionarioController(
        IFuncionarioService service
    ) => _service = service;

    [HttpGet]

    public IActionResult GetAll()
    {
        var funcionarios = _service.GetAll();
        return Ok(funcionarios);
    }

    [HttpGet("{id}")]
    public IActionResult GetById(int id)
    {
        var funcionario = _service.GetById(id);
        if (funcionario == null) return NotFound();
        return Ok(funcionario);
    }

    [HttpPost]
    public IActionResult Create([FromBody] Funcionario f)
    {
        if (!ModelState.IsValid) return BadRequest(ModelState);

        var criado = _service.Create(f);

        return CreatedAtAction(nameof(GetById),
        new
        {
            id = criado
        }, criado);
    }

    [HttpPut("{id}")]
    public IActionResult Update(int id, [FromBody] Funcionario f)
    {
        var atualizado = _service.Update(id, f);

        if (atualizado == null) return NotFound();

        return Ok(atualizado);
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        var deletado = _service.Delete(id);

        if (!deletado) return NotFound();

        return NoContent();
    }
}
