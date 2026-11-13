use college_db;

create table student(
student_id int primary key auto_increment,
student_name varchar(100) not null,
student_age int,
email varchar(100) unique,
course varchar(50) not null,
fees decimal(10,2),
admission_date date, 
createdby varchar(50) default "Abi",
createdat timestamp default current_timestamp,
updateby varchar(30),
updatedat timestamp default current_timestamp,
status boolean default true
);

rename table student to student_details;
alter table student_details add mobilenum varchar(10) after email;