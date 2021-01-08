create database maosdadas;
use maosdadas;

create table usuario(
id_usuario int auto_increment,
nome varchar(100),
cpf varchar(20),
celular varchar(50),
email varchar(100),
senha varchar (50),
primary key (id_usuario)
);

create table cadastrarprodutos(
id_cad_pro int auto_increment,
produto varchar(100),
categoria varchar(50),
imagem varchar(100) default '../Imagens/default.jpg',
valor varchar (50),
descricao varchar(500),
primary key (id_cad_pro)
);
