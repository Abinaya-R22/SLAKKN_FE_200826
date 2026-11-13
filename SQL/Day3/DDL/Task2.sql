use college_db;
create table employees(
employee_id int primary key auto_increment,
name varchar(100) not null,
salary decimal(10,2) check(salary>10000),
department varchar(50) default 'IT',
joining_date date not null,
city varchar(20),
createdby varchar(30) default 'admin',
createdat timestamp default current_timestamp,
updatedby varchar(20),
updatedat timestamp default current_timestamp,
status boolean default true
);
alter table employees rename column name to employee_name;
alter table employees modify salary decimal(12,2);
alter table employees add email varchar(30) unique;
