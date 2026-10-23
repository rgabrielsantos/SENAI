using MinhaApi.Repositories;
using MinhaApi.Services;
using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;


var builder = WebApplication.CreateBuilder(args);

var jwtKey = builder.Configuration["Jwt:Key"]!;
builder.Services
  .AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
  .AddJwtBearer(opt =>
  {
      opt.TokenValidationParameters = new TokenValidationParameters
      {
          ValidateIssuerSigningKey = true,
          IssuerSigningKey = new SymmetricSecurityKey(
            Encoding.UTF8.GetBytes(jwtKey)),
          ValidateIssuer = true,
          ValidIssuer = builder.Configuration["Jwt:Issuer"],
          ValidateAudience = true,
          ValidAudience = builder.Configuration["Jwt:Audience"],
          ValidateLifetime = true
      };
  });
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors(options =>
{
    options.AddPolicy("FrontendPolicy", policy =>
    {
        policy.WithOrigins("http://localhost:5173", "http://localhost:5174")
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});


// ✅ Registra o Repository
builder.Services.AddScoped<
    IProdutoRepository,
    ProdutoRepository>();
builder.Services.AddScoped<
    IClienteRepository,
    ClienteRepository>();
builder.Services.AddScoped<
    IVendaRepository,
    VendaRepository>();
builder.Services.AddScoped<
    IFornecedorRepository,
    FornecedorRepository>();
builder.Services.AddScoped<
    IDepartamentoRepository,
    DepartamentoRepository>();
builder.Services.AddScoped<
    IFuncionarioRepository,
    FuncionarioRepository>();

// ✅ Registra a Service
builder.Services.AddScoped<
    IProdutoService,
    ProdutoService>();
builder.Services.AddScoped<
    IClienteService,
    ClienteService>();
builder.Services.AddScoped<
    ITipoService,
    TipoService>();
builder.Services.AddScoped<
    IVendaService,
    VendaService>();
builder.Services.AddScoped<
    IFornecedorService,
    FornecedorService>();
builder.Services.AddScoped<
    IDepartamentoService,
    DepartamentoService>();
builder.Services.AddScoped<
    IFuncionarioService,
    FuncionarioService>();

builder.Services.AddScoped<IUsuarioRepository, UsuarioRepository>();
builder.Services.AddScoped<IAuthService, AuthService>();

var app = builder.Build();


if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

Console.WriteLine(BCrypt.Net.BCrypt.HashPassword("123456"));
app.UseCors("FrontendPolicy");
app.UseAuthentication();  // 1º quem é você?
app.UseAuthorization();   // 2º você pode entrar?
app.MapControllers();
app.Run();
