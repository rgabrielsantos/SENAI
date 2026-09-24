

using Microsoft.AspNetCore.Mvc;
using MinhaApi.DTO;
using MinhaApi.Models;
using MinhaApi.Services;

[ApiController]
[Route("api/[controller]")]
public class VendaController : ControllerBase
{
    private readonly IVendaService _service;

    public VendaController(IVendaService service) => _service = service;

    [HttpGet]
    public IActionResult GetAll()
    {
        var produtos = _service.GetAll();
        return Ok(produtos);
    }
    [HttpPost]
    public IActionResult Create([FromBody] VendaRequest vendas)
    {
        if (!ModelState.IsValid) return BadRequest();

        var criado = _service.Create(vendas);

        return Ok(criado);
    }

    [HttpGet("{id}")]

    public IActionResult GetById(int id)
    {
        var vendas = _service.GetById(id);
        if (vendas == null) return NotFound();
        return Ok(vendas);
    }
}
