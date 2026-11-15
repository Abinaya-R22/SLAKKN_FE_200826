use company_db;
create table customers(
customer_id int primary key auto_increment,
name varchar(100) not null,
email varchar(100) unique,
city varchar(40),
age int check(age>18),
registration_date date,
createdby varchar(100) default 'abi',
createdat timestamp default current_timestamp,
updatedby varchar(40),
updatedat timestamp default current_timestamp,
status boolean default true
);
insert into customers
(name,email,city,age,registration_date,updatedby)
values
('Abi', 'arun@gmail.com', 'Chennai', 24, '2025-01-10', 'Admin'),
('Priya', 'priya@gmail.com', 'Madurai', 22, '2026-11-14', 'Admin'),
('Sanjai', 'karthik@gmail.com', 'Trichy', 26, '2026-11-14', 'Admin'),
('Dharshu', 'divya@gmail.com', 'Coimbatore', 23, '2026-11-14', 'Staff'),
('Pavithra', 'vijay@gmail.com', 'Thanjavur', 28, '2026-11-14', 'Manager'),
('Maha', 'sneha@gmail.com', 'Salem', 21, '2026-11-14', 'Manager'),
('Bhuvi', 'rahul@gmail.com', 'Erode', 25, '2026-11-14', 'Staff'),
('Amirtha', 'meena@gmail.com', 'Chennai', 27, '2026-11-14', 'Staff'),
('Nalen', 'suresh@gmail.com', 'Vellore', 30, '2026-11-14', 'Admin'),
('Yazhini', 'anitha@gmail.com', 'Madurai', 24, '2026-11-14', 'Manager');

insert into customers
(name,email,city,age,registration_date,updatedby)
values('Kavitha P', 'kavitha@gmail.com', 'Salem', 31, '2025-05-20', 'Manager');

insert into customers
values(12,'Kaviya', 'kaviya@gmail.com', 'Bangalore', 26, '2026-11-14','abi','2026-11-14 12:41:29', 'Admin','2026-11-14 12:41:29',1);

insert into customers
(name,email,updatedby)
values
('Vishnu', 'vishnu@gmail.com', 'sales');