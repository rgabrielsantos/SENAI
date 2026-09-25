using Microsoft.AspNetCore.Mvc;
using MinhaApi.Models;
using MinhaApi.Services;

[ApiController]
[Route("api/[controller]")]

public class DepartamentoController
 : ControllerBase
{
    private readonly IDepartamentoService _service;

    public DepartamentoController(
        IDepartamentoService service
    ) => _service = service;

    [HttpGet]

    public IActionResult GetAll()
    {
        var departamentos = _service.GetAll();
        return Ok(departamentos);
    }

    [HttpGet("{id}")]
    public IActionResult GetById(int id)
    {
        var departamento = _service.GetById(id);
        if (departamento == null) return NotFound();
        return Ok(departamento);
    }

    [HttpPost]
    public IActionResult Create([FromBody] Departamento d)
    {
        if (!ModelState.IsValid) return BadRequest(ModelState);

        var criado = _service.Create(d);

        return CreatedAtAction(nameof(GetById),
        new
        {
            id = criado
        }, criado);
    }

    [HttpPut("{id}")]
    public IActionResult Update(int id, [FromBody] Departamento d)
    {
        var atualizado = _service.Update(id, d);

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
