create database task10;
use task10;
create table departments(
    department_id int primary key auto_increment,
    department_name varchar(100) not null,
    location varchar(50),
    createdby varchar(100) default 'Abi',
    createdat timestamp default now(),
    updateby varchar(40),
    updatedat timestamp default current_timestamp
);

insert into departments
(department_name, location, updateby)
values
('IT', 'Chennai', 'Abi'),
('HR', 'Bangalore', 'Admin'),
('Finance', 'Coimbatore', 'Abi'),
('Marketing', 'Madurai', 'Manager'),
('Sales', 'Trichy', 'Admin');

create table employee(
    employee_id int primary key auto_increment,
    employee_name varchar(100) not null,
    email varchar(100) unique,
    salary decimal(10,2),
    department varchar(60),
    joining_date date,
    createdby varchar(100) default 'Abi',
    createdat timestamp default now(),
    updateby varchar(40),
    updatedat timestamp default current_timestamp

);
insert into employee
(employee_name, email, salary, department, joining_date, updateby)
values
('Arun Kumar', 'arun@gmail.com', 35000, 'IT', '2025-01-10', 'Abi'),
('Priya Sharma', 'priya@gmail.com', 30000, 'HR', '2025-02-15', 'Admin'),
('Karthik Raj', 'karthik@gmail.com', 45000, 'Finance', '2025-03-05', 'Abi'),
('Divya Lakshmi', 'divya@gmail.com', 40000, 'Marketing', '2025-04-12', 'Manager'),
('Vijay Kumar', 'vijay@gmail.com', 32000, 'Sales', '2025-05-20', 'Admin');

drop table departments;
drop database task10;






