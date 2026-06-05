create database animales;
use animales;

create table animal (
	id int primary key not null auto_increment,
    especie varchar(50) not null
);

SELECT * FROM animal;