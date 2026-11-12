create database slanewdb;

use slanewdb;

create table stutable(
id int primary key auto_increment,
studentname varchar(30) not null,
studentage int check(studentage=>18)










);