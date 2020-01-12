DROP DATABASE IF EXISTS burger_db;
CREATE DATABASE burger_db;
USE burger_db;

create table burgers(
    id int primary key not null auto_increment,
    burger_name varchar(30),
    devoured boolean
);
