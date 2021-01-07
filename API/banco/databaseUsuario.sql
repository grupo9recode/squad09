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