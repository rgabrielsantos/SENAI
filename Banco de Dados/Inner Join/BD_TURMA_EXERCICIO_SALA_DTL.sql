create database  turma;
use turma;

CREATE TABLE curso(
    idcurso INT PRIMARY KEY AUTO_INCREMENT,
    nome_curso VARCHAR(100),
    descricao TEXT,
    duracao_meses INT,
    nivel VARCHAR(50),
    coordenador VARCHAR(100)
);


CREATE TABLE aluno  (
    idaluno INT PRIMARY KEY AUTO_INCREMENT,
    nome_aluno VARCHAR(100),
    data_nascimento DATE,
    genero VARCHAR(20),
    endereco VARCHAR(200),
    telefone VARCHAR(15),
    email VARCHAR(100),
    idcurso INT,
    FOREIGN KEY (idcurso) REFERENCES curso(idcurso)
);



CREATE TABLE professor  (
    idprofessor INT PRIMARY KEY AUTO_INCREMENT,
    nome_professor VARCHAR(100),
    data_nascimento DATE,
    genero VARCHAR(20),
    especialidade VARCHAR(100),
    telefone VARCHAR(15),
    email VARCHAR(100),
    idcurso INT,
    FOREIGN KEY (idcurso) REFERENCES curso(idcurso)
);

-- Inserção de registros na tabela cursos 
INSERT INTO curso( nome_curso, descricao, duracao_meses, nivel, coordenador)
VALUES
    ( 'Ciência da Computação', 'Bacharelado em Ciência da Computação', 48, 'Graduação', 'Prof. Maria Silva'),
    ( 'Engenharia Elétrica', 'Curso de Engenharia Elétrica com foco em eletrônica', 50, 'Graduação', 'Prof. João Santos'),
    ( 'Administração de Empresas', 'Curso de Administração com ênfase em gestão', 48, 'Graduação', 'Prof. Ana Oliveira'),
    ( 'Matemática Aplicada', 'Curso de Matemática com aplicação prática', 36, 'Pós-Graduação', 'Prof. Pedro Rocha'),
    ( 'Logística', 'Bacharelado em Logística', 36, 'Pós-Graduação', 'Prof. Suzanna Lima');

-- Inserção de registros na tabela aluno 
INSERT INTO aluno (nome_aluno, data_nascimento, genero, endereco, telefone, email, idcurso)
VALUES
    ( 'Ana Souza', '1998-03-15', 'Feminino', 'Rua das Flores, 123', '(11) 98765-4321', 'ana.souza@gmail.com', 1),
    ( 'Carlos Oliveira', '1999-07-22', 'Masculino', 'Av. Principal, 456', '(21) 98765-9876', 'carlos.oliveira@gmail.com', 2),
    ( 'Mariana Silva Costa', '2000-01-10', 'Feminino', 'Praça Central, 789', '(31) 99876-5432', 'mariana.costa@hotmail.com', 1),
    ( 'Rafael Silva Santos', '1998-12-05', 'Masculino', 'Rua dos Sonhos, 789', '(11) 97654-3210', 'rafael.santos@hotmail.com', 3),
    ( 'Maria Juju', '2000-05-10', 'Feminino', 'Praça Abrantes, 11', '(71) 88888-5432', 'maria.juju@hotmail.com', 2),
    ( 'Sócrates Souza', '1970-12-05', 'Masculino', 'Rua Sol, 89', '(71) 98484-3210', 'socrates@hotmail.com', 3);


-- Inserção de registros na tabela professor 
INSERT INTO professor (nome_professor, data_nascimento, genero, especialidade, telefone, email, idcurso)
VALUES
    ( 'Prof. Maria Silva', '1985-05-20', 'Feminino', 'Programação', '(11) 98765-1111', 'maria.silva@example.com', 1),
    ( 'Prof. João Santos', '1978-08-12', 'Masculino', 'Eletrônica', '(21) 98765-2222', 'joao.santos@example.com', 2),
    ( 'Prof. Ana Oliveira', '1990-02-18', 'Feminino', 'Gestão de Negócios', '(31) 99876-3333', 'ana.oliveira@senai.fieb.org.br', 3),
    ( 'Prof. Pedro Rocha', '1982-11-30', 'Masculino', 'Matemática Avançada', '(11) 97654-4444', 'pedro.rocha@example.com', 4),
    ( 'Prof. Izabele Silva', '1985-05-20', 'Feminino', 'Programação', '(11) 98765-1111', 'izabele.silva@gmail.com', 2),
    ( 'Prof. Suzanna Lima', '1990-08-12', 'Feminino', 'Administração', '(21) 98765-2222', 'suzannalima@example.com', 5);
    

-- USANDO DTL 

-- Atualizar o nível do curso de todos os cursos para Graduação 
select * from curso;
set sql_safe_updates = 0;
BEGIN;
UPDATE CURSO
SET nivel = 'Graduação';
ROLLBACK;
-- COMMIT;

-- Atualizar o nome do coordenador do curso de Engenharia Elétrica para Prof. Pedro Rocha
select * from curso where nome_curso = 'Engenharia Eletrica';

BEGIN;

UPDATE CURSO
SET coordenador = 'Prof. Pedro Rocha'
WHERE NOME_CURSO = 'Engenharia Eletrica';

-- ROLLBACK;
COMMIT;
-- Atualizar o curso de todos os professores com especialidade em programação para Ciência da Computação

SELECT * FROM PROFESSOR;

BEGIN;
	UPDATE PROFESSOR
    SET ESPECIALIDADE = 'Ciências da Computação'
    WHERE ESPECIALIDADE = 'Programação';
ROLLBACK;
COMMIT;

-- Atualizar a data de nascimento para 01/04/2000 de todos os alunos do curso de 
-- Logística (você só sabe o nome do curso)
select * from Curso;
select * from Aluno;

BEGIN;

UPDATE ALUNO
SET DATA_NASCIMENTO = '2000-04-01'
WHERE IDCURSO = (select idcurso from curso where nome_curso = 'Logistica');

ROLLBACK;
-- COMMIT


-- Atualizar a especialidade de todos os professores para
-- 'Desenvolvimento de Sistemas' se o nome do curso dele for 
-- 'Ciencia da Computação' (você só sabe o nome do curso)

select * from Curso;
select * from professor;
BEGIN;

UPDATE PROFESSOR
SET especialidade = 'Desenvolvimento de Sistemas'
WHERE idcurso = (select idcurso from curso where nome_curso = 'Ciência da Computação');

ROLLBACK;
-- COMMIT;
-- Atualizar o coordenador do curso de Logística para o nome do coordenador do curso de Administração
select * from curso;

BEGIN;
UPDATE CURSO
SET coordenador = (select coordenador from curso where nome_curso = 'Administração de Empresas')
WHERE nome_curso = 'Logística';

ROLLBACK;
-- COMMIT;
-- Atualizar o email de todos os aluno que estão matriculados em cursos 
-- cuja duracao_meses seja de 50 para 'aluno_50@update.com' (usando JOIN)
BEGIN;

UPDATE aluno
JOIN curso on curso.idcurso = aluno.idcurso
SET aluno.email = 'aluno_50@update.com' 
WHERE curso.duracao_meses = 50;

ROLLBACK;
-- COMMIT;


-- Atualizar a especialidade de todos os professor que lecionam em cursos de nível 
-- Graduação para 'Especialidade Especial'  (usando JOIN)
select * from professor;

BEGIN;

UPDATE PROFESSOR
JOIN CURSO ON CURSO.IDCURSO = PROFESSOR.IDCURSO
SET PROFESSOR.ESPECIALIDADE = 'Especialidade Especial'
WHERE CURSO.NIVEL = (SELECT NIVEL FROM CURSO WHERE NIVEL = 'GRADUAÇÃO');

ROLLBACK;
-- COMMIT;
