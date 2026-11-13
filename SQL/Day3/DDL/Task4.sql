use college_db;
create table patients(
patient_id int primary key auto_increment,
patient_name varchar(100) not null,
age int,
gender varchar(30),
disease varchar(40),
admission_date date,
doctor_name varchar(100) not null,
createdby varchar(40) default 'Abi',
createdat timestamp default current_timestamp,
updatedby varchar(30),
updatedat timestamp default current_timestamp,
status boolean default true
);

alter table patients modify patient_name varchar(150);
alter table patients add contact_number varchar(10);
rename table patients to patient_records;