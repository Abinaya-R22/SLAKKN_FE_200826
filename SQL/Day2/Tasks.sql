create database warehouse;
use warehouse;

-- 1. class task practice

create table warehousetable(
id int primary key auto_increment,
warehouse_name varchar(30) not null,
warehouse_partnum varchar(10) unique,
warehouse_location varchar(40),
warehouse_price int,
warehouse_area int,
is_active boolean default True,
created_date datetime default current_timestamp,
createdby varchar(100) default "Abi",
createdat timestamp default current_timestamp,
updatedby varchar(100),
updatedat timestamp default current_timestamp,
status boolean default TRUE
); 
 
 
 