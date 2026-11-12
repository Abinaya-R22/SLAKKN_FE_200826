create database college_db;
use college_db; 
create table students(
student_id int primary key auto_increment,
student_name varchar(100) not null,
age int check(age>=18),
email varchar(100) unique,
city varchar(50) default "Chennai",
admission_date date,
createdby varchar(10) default "admin",
createdat timestamp default current_timestamp,
updatedby varchar(20),
updatedat timestamp default current_timestamp,
status boolean default true

);


DESC students;