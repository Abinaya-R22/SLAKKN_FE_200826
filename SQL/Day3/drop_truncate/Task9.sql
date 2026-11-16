create database library_db;
use library_db; 
create table books(
book_id int primary key auto_increment,
book_name varchar(40) not null,
author varchar(40) not null,
price decimal(10,2) check(price>0),
published_date date,
createdby varchar(100) default 'Abi',
createdat timestamp default now(),
updateby varchar(40),
updatedat timestamp default current_timestamp
);
insert into books (book_name, author, price, published_date, updateby)
values
('Wings of Fire', 'APJ Abdul Kalam', 250.00, '1999-01-01', 'Abi'),
('The Alchemist', 'Paulo Coelho', 350.00, '1988-01-01', 'Admin'),
('Ponniyin Selvan', 'Kalki Krishnamurthy', 500.00, '1950-10-29', 'Abi'),
('Atomic Habits', 'James Clear', 450.00, '2018-10-16', 'Admin'),
('Rich Dad Poor Dad', 'Robert Kiyosaki', 300.00, '1997-04-08', 'Abi');

truncate table books;