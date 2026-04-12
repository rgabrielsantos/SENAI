CREATE DATABASE restaurante_reserva;
USE restaurante_reserva;

CREATE TABLE cliente (
    idcliente INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    telefone VARCHAR(15),
    email VARCHAR(100)
);

CREATE TABLE restaurante (
    idrestaurante INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100),
    endereco VARCHAR(255) NOT NULL,
    telefone VARCHAR(15)
);

CREATE TABLE funcionario(
idfuncionario INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(100),
cargo VARCHAR(20)
);

CREATE TABLE mesa (
    idmesa INT PRIMARY KEY AUTO_INCREMENT,
    numero_mesa INT,
    capacidade INT,
    idrestaurante INT,
    FOREIGN KEY (idrestaurante) REFERENCES restaurante(idrestaurante)
);

CREATE TABLE menu (
    idmenu INT PRIMARY KEY AUTO_INCREMENT,
    tipo_menu VARCHAR(45),
    idrestaurante INT,
    FOREIGN KEY (idrestaurante) REFERENCES restaurante(idrestaurante)

);

CREATE TABLE reserva (
    idreserva INT PRIMARY KEY AUTO_INCREMENT,
    data_reserva VARCHAR(45),
    hora_reserva VARCHAR(45),
    quantidade_pessoas INT NOT NULL,
    idcliente INT,
    idrestaurante INT,
    idfuncionario INT,
    FOREIGN KEY (idcliente) REFERENCES cliente(idcliente),
    FOREIGN KEY (idrestaurante) REFERENCES restaurante(idrestaurante),
    FOREIGN KEY (idfuncionario) REFERENCES funcionario(idfuncionario)
);

select * from cliente;

alter table cliente
add cpf varchar(14);

alter table reserva
add valor_reserva decimal(10,2);

alter table restaurante
add estrela int;

alter table cliente
modify telefone varchar(15) not null;

alter table restaurante
modify telefone varchar(15) not null;

alter table reserva
modify data_reserva date;

alter table reserva
modify hora_reserva time;

select * from cliente;

-- clientes inseridos pelo terminal
-- insert into cliente(nome,telefone,email,cpf) values ("","","","");

select * from funcionario;

-- funcionarios inseridos pelo terminal
-- insert into funcionario(nome,cargo) values ("","");

select * from restaurante;

-- restaurantes inseridos pelo terminal
-- insert into restaurante(nome,endereco,telefone,estrela) values ("","","","");


-- inserindo menus no dedo
select * from menu;

insert into menu(idmenu,tipo_menu,idrestaurante) values 
(1,"Pizzas",1),
(2,"Pizzas",2),
(3,"Hamburguer",3),
(4,"Hamburguer",4),
(5,"Beiju´s",5),
(6,"Acaraje",6)
;

-- inserindo mesa nos restaurantes
select * from mesa;

insert into mesa(idmesa,numero_mesa,capacidade,idrestaurante) values 
(1,44,8,1),
(2,1,6,2),
(3,50,4,3),
(4,99,4,4),
(5,20,2,5),
(6,2,2,6)
;
-- inserindo reservas na tabela

select * from reserva;

-- insert into reserva(idreserva,data_reserva,hora_reserva,quantidade_pessoas,idcliente,idrestaurante,idfuncionario,valor_reserva) values 
-- (1, 	'2026-04-06',	'16:30',		7,				1,			1,			1,				14.99);


-- Para comandos de seleção:

-- Trazer nome e telefone de clientes da região com DDD 71
select nome, telefone 
from cliente
where telefone like '%71%';

-- Trazer nome de todos os restaurantes e telefone dos mesmos que tenham no campo endereço a palavra 'Salvador'
select nome, telefone
from restaurante
where endereco like 'Salvador';

-- Trazer a quantidade de reservas feitas no mês de janeiro de 2026
select * from reserva;

select count(*) as Quantidade
from reserva
where data_reserva >= '2026-01-01' and data_reserva <= '2026-01-31';

-- Trazer a soma dos valores de reservas feitas em 2026
select valor_reserva from reserva;

select sum(valor_reserva) as Total_R$_reservas
from reserva;

-- Trazer a média dos valores de reservas cuja a quantidade de pessoas seja maior que 2
select valor_reserva, quantidade_pessoas from reserva;

select avg(valor_reserva) as Media
from reserva
where quantidade_pessoas > 	'2';
 
-- Trazer o número da mesa e a capacidade da mesa que tem maior capacidade possível de pessoas
select numero_mesa as numero_maior_mesa, capacidade as maior_capacidade
from mesa
order by capacidade desc limit 1;

-- 1. Trazer nomes dos restaurantes e as datas das reservas feitas em cada
select nome, data_reserva
from restaurante 
join reserva on restaurante.idrestaurante = reserva.idrestaurante;

select * from restaurante;

-- 2. Trazer o nome do restaurante, o número da mesa e a capacidade das mesas daquele restaurante.
select r.nome, m.numero_mesa, m.capacidade
from restaurante r
join mesa m on m.idrestaurante = r.idrestaurante;

-- 3. Trazer o nome do cliente, o nome do funcionário que fez a reserva e a quantidade de pessoas na reserva.
select c.nome as Nome_Cliente, f.nome as Nome_Funcionario, r.quantidade_pessoas
from cliente c
join reserva r on c.idcliente = r.idcliente
join funcionario f on f.idfuncionario = r.idfuncionario;

-- 4. Trazer o nome do cliente, a quantidade de pessoas na reserva e o valor da reserva feita em determinado restaurante.

select c.nome, r.quantidade_pessoas, r.valor_reserva, rest.nome
from cliente c
join reserva r on c.idcliente = r.idcliente
join restaurante rest on rest.idrestaurante = r.idrestaurante; 

-- 5. Trazer o nome do restaurante, o tipo do menu oferecido e o nome do cliente que fez a reserva nesse restaurante.
select c.nome as cliente, r.nome as restaurante, m.tipo_menu
from reserva res
join cliente c on c.idcliente = res.idcliente
join restaurante r on r.idrestaurante = res.idrestaurante
join menu m on m.idrestaurante = res.idrestaurante;

-- 6. Trazer o nome do cliente, o nome do restaurante e o nome do funcionário que fez a reserva, ordenado por data da reserva.

select c.nome as cliente, r.nome as restaurante, f.nome as funcionario
from reserva res
join cliente c on c.idcliente = res.idcliente
join restaurante r on r.idrestaurante = res.idrestaurante
join funcionario f on f.idfuncionario = res.idfuncionario
order by res.data_reserva desc;

-- 7. Trazer a data mais recente que uma reserva foi efetuada e o nome do restaurante a qual pertence.

select res.data_reserva, r.nome
from reserva res
join restaurante r on r.idrestaurante = res.idrestaurante
order by data_reserva desc limit 1; 

-- 8. Trazer o maior valor de reserva feito, com nome do restaurante e nome do cliente que o fez.
select r.nome, c.nome, res.valor_reserva as maior_preço
from reserva res 
join cliente c on c.idcliente = res.idcliente
join restaurante r on r.idrestaurante = res.idrestaurante
order by res.valor_reserva desc limit 1;
-- 9. Trazer a média de valores gastos por cliente em suas reservas, nome do cliente e média do mesmo.
select c.nome,avg(rsv.valor_reserva) as media_por_reserva
from reserva rsv
join cliente c on c.idcliente = rsv.idcliente
group by c.nome;
-- 10. Trazer a soma de valores reservados por nome de restaurante e funcionário que o reservou.
select r.nome as Restaurante, f.nome as Funcionario, sum(valor_reserva) as soma
from reserva rsv
join restaurante r on r.idrestaurante = rsv.idrestaurante
join funcionario f on f.idfuncionario = rsv.idfuncionario
group by r.nome, f.nome;
-- 11 Qual a média da quantidade de pessoas que já fizeram uma reserva?
select c.idcliente
from reserva rsv
join cliente c on c.idcliente = rsv.idcliente
group by c.nome;
-- 12 Faça a listagem de menus por restaurante, trazendo nome do mesmo, endereço, telefone e 
-- tipos de menu associados.
select r.nome, r.endereco, r.telefone, m.tipo_menu
from restaurante r
join menu m on m.idrestaurante = r.idrestaurante
where r.idrestaurante = 2;
  
-- 13 Qual o nome dos clientes, telefone e e-mail destes que já realizaram 
-- uma reserva num restaurante com ddd 71?
select c.nome,c.telefone,c.email
from reserva rsv
join cliente c on c.idcliente = rsv.idcliente
join restaurante r on r.idrestaurante = rsv.idrestaurante 
group by r.telefone like '%71%'; 
-- 14 Qual a quantidade de clientes que reservaram uma mesa com mais de 4 lugares?
select ,
-- 15 Qual o maior preço de reserva já feito e o restaurante a qual pertence.

-- 16 Liste o cargo de todos os funcionários que já fizeram uma reserva e o valor das mesmas.
	
-- 17 Liste o menor valor já reservado por um cliente, trazendo o nome dele e a capacidade da mesa associada.
