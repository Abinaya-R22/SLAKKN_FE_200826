use company_db;

create table products(
product_id int primary key auto_increment,
product_name varchar(150) not null,
product_code varchar(30) unique,
category varchar(50) not null,
price decimal(10,2) check(price>0),
stock int default 0,
brand varchar(50) default 'generic',
manufacture_date date,
expiry_date date,
is_available boolean default true,
createdby varchar(40) default 'admin',
createdat timestamp default current_timestamp,
updatedby varchar(40),
updatedat timestamp default current_timestamp

);
