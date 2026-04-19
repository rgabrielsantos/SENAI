CREATE DATABASE concessionaria;

use  concessionaria;

create table carro(
idcarro int primary key auto_increment,
marca VARCHAR(225) NOT NULL,
modelo VARCHAR(225),
ano INT NOT NULL,
cor VARCHAR(45),
preco DECIMAL(10,2) NOT NULL,
numero_chassi VARCHAR(17) NOT NULL,
quilometragem REAL, 
tipo_combustivel VARCHAR(45)
);
select * from carro;
-- Carro

select * from cliente;
alter table `concessionaria.cliente`
rename to cliente;

alter table cliente
add column idcliente INT PRIMARY KEY AUTO_INCREMENT;

ALTER TABLE cliente
modify nome VARCHAR(225);

ALTER TABLE cliente
modify endereco VARCHAR(225);

ALTER TABLE cliente
modify telefone VARCHAR(20);

alter TABLE cliente
modify email VARCHAR(150);

ALTER TABLE cliente
modify data_registro DATE;

CREATE TABLE vendedor(
idvendedor int primary key auto_increment,
nome VARCHAR(120) not null,
endereco VARCHAR(225) not null,
telefone VARCHAR(20),
email VARCHAR(225),
data_contratacao DATE,
salario DECIMAL(10,2)
);

SELECT * FROM vendedor;
SELECT * FROM cliente;
SELECT * FROM carro;
select * from vendas;
create table vendas(
idvendas int primary key auto_increment,
idcliente int,
idcarro int,
idvendedor int,
data_venda date,
forma_pagamento VARCHAR(40) NOT NULL,
status_entrega VARCHAR(40),
constraint idcliente
foreign key (idcliente) references cliente(idcliente),
constraint idcarro
foreign key(idcarro) references carro(idcarro),
constraint idvendedor
foreign key(idvendedor) references vendedor(idvendedor)
);

select*from vendas;


/*
- Qual o nome do cliente com cadastro mais antigo?
*/
select c.nome as Cliente, c.data_registro as Data_do_Registro
from vendas v
join cliente c on c.idcliente = v.idcliente
group by c.data_registro limit 1;
/*
- Qual o maior e menor salário entre os vendedores? Trazendo o nome de cada e salário.
*/
 select vdd.nome as Vendedor, vdd.salario
 from vendas v
 join vendedor vdd on vdd.idvendedor = v.idvendedor
 order by vdd.nome desc limit 1;

 select vdd.nome as Vendedor, vdd.salario
 from vendas v
 join vendedor vdd on vdd.idvendedor = v.idvendedor
 order by vdd.nome limit 1; 
/*
- Qual é o mês com maior número de vendas já registrado?
*/
select month(v.data_venda) as Mes_da_Venda, count(*) as Quantidade
from vendas v
group by month(v.data_venda)
order by Quantidade desc limit 1;

select * from vendas;
/*
- Qual o nome e data de contratação do vendedor mais recentemente contratado?
*/
select vdd.nome as Funcionario, vdd.data_contratacao as Contratacao
from vendedor vdd
group by vdd.nome
order by vdd.data_contratacao desc limit 1;
select * from vendedor;
/*
- Qual vendedor possui maior número de vendas? Trazer nome do vendedor e quantidade de vendas feitas.
*/


SELECT v.nome as Vendedor, count(ven.idvendas) as Vendas
FROM vendas ven
JOIN vendedor v on v.idvendedor = ven.idvendedor
group by v.nome
order by count(ven.idvendas) desc limit 1;
/*
- Qual a média da quilometragem de todos os carros vendidos?
*/
select avg(c.quilometragem) as Media
from Vendas v
join carro c on c.idcarro = v.idcarro;
/*
- Qual o maior preço do carro disponível na concessionária? E o maior preço do carro já vendido?
*/
select max(c.preco) as Maior_Preço
from carro c;

select v.idcarro ,c.preco as Maior_Preço
from vendas v
join carro c on c.idcarro = v.idcarro
order by c.preco desc limit 1;

select * from vendas;
select * from carro;

/*
- Quais são os carros que já foram vendidos mais de uma vez na concessionária? Trazer marca, modelo e quantidade de vezes.
*/
select c.marca as Marca, c.modelo as Modelo, count(v.idcarro) as Quantidades_Vendidas
from Vendas v
join carro c on c.idcarro = v.idcarro
group by c.marca, c.modelo;
/*
- Quais são os clientes que já compraram mais de um carro na concessionária? Trazendo o nome do cliente e quantidade comprada de cada um.
*/
select * from cliente;

select c.nome as Cliente, count(v.idcliente) as Quantidade_Compra
from vendas v
join cliente c on c.idcliente = v.idcliente
group by c.nome
having Quantidade_Compra>1;

/*- Trazer todas as vendas, contendo: Somente ano da venda, data da venda completa, forma de pagamento, 
status da entrega, nome do vendedor, nome do cliente, preço e modelo do carro. 
Ordenando pela data da venda. 
Exportar em planilha .csv e anexar à atividade.
*/

select year(v.data_venda) as Ano, v.data_venda as Data_Completa, v.forma_pagamento as Forma_de_Pagamento,
v.status_entrega as Status_de_Entrega, ven.nome as Vendedor, c.nome as Cliente, car.preco as Preço, car.modelo as Modelo
from Vendas v
join vendedor ven on ven.idvendedor = v.idvendedor
join cliente c on c.idcliente = v.idcliente
join carro car on car.idcarro = v.idcarro
order by v.data_venda;


