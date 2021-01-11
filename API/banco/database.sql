create database maosdadas;
use maosdadas;

create table usuario(
id_usuario varchar(50),
nome varchar(100),
cpf varchar(20),
celular varchar(50),
email varchar(100),
senha varchar (50),
primary key (id_usuario)
);

alter table usuario 
ENGINE = innodb;

create table cadastrarprodutos(
username varchar(50) not null,
produto varchar(100),
categoria varchar(50),
imagem varchar(100) default '../Imagens/default.jpg',
valor varchar (50),
descricao varchar(500)
);

alter table cadastrarprodutos 
ENGINE = innodb;

ALTER TABLE `cadastrarprodutos` ADD CONSTRAINT `fk_usuario` FOREIGN KEY ( `username` ) REFERENCES `usuario` ( `id_usuario` ) ;

select username, produto, categoria, valor, descricao, nome, cpf, celular, email
from cadastrarprodutos
inner join usuario 
on id_usuario = username;
