use company_db;
create table staff(
staff_id int primary key auto_increment,
name varchar(100) not null,
department varchar(100),
salary decimal(10,2) check(salary>10000),
city varchar(30),
createdby varchar(100) default 'abi',
createdat datetime default now(),
updatedby varchar(40),
updatedat timestamp default current_timestamp,
status boolean default true
);

insert into staff (name, department, salary, city, updatedby)
values
('Arun Kumar', 'IT', 35000.00, 'Chennai', 'Admin' ),
('Priya Sharma', 'HR', 28000.00, 'Madurai', 'Abi'),
('Karthik Raj', 'Finance', 45000.00, 'Trichy', 'Manager'),
('Divya Lakshmi', 'IT', 52000.00, 'Coimbatore', 'Admin'),
('Vijay', 'Marketing', 30000.00, 'Thanjavur', 'Abi'),
('Sneha R', 'HR', 32000.00, 'Salem', 'Manager'),
('Rahul S', 'Finance', 40000.00, 'Erode', 'Admin'),
('Meena Devi', 'IT', 60000.00, 'Chennai', 'Abi');

update staff
set salary=40000
where staff_id=3;

update  staff
set department='IT'
where staff_id=5; 

update staff
set salary=salary+5000
where staff_id=3;

update staff
set salary=40000
where staff_id=3;

UPDATE staff
SET salary = salary + 5000
WHERE department = 'HR';

update staff 
set city='chennai'
where salary>30000;