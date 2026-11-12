create database slanewdb;

use slanewdb;

create table stutable(
id int primary key auto_increment,
studentname varchar(30) not null,
studentage int check(studentage>=18),
gender varchar(30),
course varchar(30) default "Tech",
email varchar(40) unique,
admission_date date,
createdby varchar(30) default "admin",
createdat timestamp default current_timestamp,
updatedby varchar(40),
updatedat timestamp default current_timestamp
);
