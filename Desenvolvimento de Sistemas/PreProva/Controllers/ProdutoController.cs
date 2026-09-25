
using Microsoft.AspNetCore.Mvc;
using PreProva.Models;
using PreProva.Services;

namespace PreProva.Controllers;

[ApiController]
[Route("api/[controller]")]

public class ProdutoController
: ControllerBase
{
    private readonly IProdutoService _service;

    public ProdutoController(IProdutoService service) => _service = service;

    [HttpGet]
    public IActionResult GetAll()
    {
        var produtos = _service.GetAll();
        return Ok(produtos);
    }

    [HttpGet("{id}")]
    public IActionResult GetById(int id)
    {
        var produto = _service.GetById(id);
        if (produto == null) return NotFound();

        return Ok(produto);

    }

    [HttpPost]
    public IActionResult Create([FromBody] Produto produto)
    {
        if (!ModelState.IsValid) return BadRequest(ModelState);
        var criado = _service.Create(produto);

        return CreatedAtAction(nameof(GetById),
        new
        {
            id = criado
        }, criado);
    }
}
