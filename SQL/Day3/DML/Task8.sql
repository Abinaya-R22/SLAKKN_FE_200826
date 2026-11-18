use company_db;
create table orders(
order_id int primary key auto_increment,
customer_name varchar(40) not null,
product_name varchar(30) not null,
quantity int,
price decimal(10,2) check(price>0),
order_date date,
createdby varchar(100) default 'Abi',
createdat timestamp default now(),
updateby varchar(40),
updatedat timestamp default current_timestamp
);

insert into orders
(customer_name, product_name, quantity, price, order_date )
values
('Arun', 'Mouse', 2, 650, '2026-01-10'),
('Priya', 'Pen', 1, 50, '2026-01-11'),
('Karthik', 'Keyboard', 3, 450, '2026-01-12'),
('Divya', 'Bag', 4, 1200, '2026-01-13'),
('Vijay', 'Bottle', 1, 300, '2026-01-14'),
('Sneha', 'Notebook', 5, 80, '2026-01-15'),
('Rahul', 'Headphones', 2, 1500, '2026-01-16'),
('Meena', 'USB Cable', 3, 250, '2026-01-17'),
('Suresh', 'Monitor', 2, 8500, '2026-01-18'),
('Anitha', 'Desk', 6, 4000, '2026-01-19');


delete from orders
where order_id=4; 

delete from orders
where quantity < 2;

delete from orders where price<500 and quantity < 5;


select* from orders;