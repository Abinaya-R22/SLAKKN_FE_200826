use college_db;
create table products(
product_id int primary key auto_increment,
product_name varchar(100) not null,
price decimal(10,2) check(price>0),
category varchar(50) not null,
stock int default 0,
manufacturing_date date,
createdby varchar(30) default 'abi',
createdat timestamp default current_timestamp,
updatedby varchar(40),
updatedat timestamp default current_timestamp,
status boolean default true
);
rename table products to product_details;
alter table product_details change price product_price decimal(10,2);
alter table product_details drop column manufacturing_date; 
alter table product_details drop check product_details_chk_1;
alter table product_details change price product_price decimal(10,2); 

