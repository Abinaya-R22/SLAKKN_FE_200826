create database company_db;
use company_db;

create table employees(
emp_id int primary key auto_increment,
emp_name varchar(100) not null,
email varchar(100) unique,
salary decimal(10,2) check(salary>10000),
department varchar(50) default "IT",
joining_date date not null,
status varchar(20) default 'active',
createdby varchar(20) default "admin",
createdat timestamp default current_timestamp,
updatedby varchar(20) ,
updatedat timestamp default current_timestamp
);

DESC employees;

