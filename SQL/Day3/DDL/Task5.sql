use college_db;
create table courses(
course_id int primary key auto_increment,
course_name varchar(100) not null,
duration varchar(50) default '3 months',
fees decimal(10,2) check(fees>0),
trainer_name varchar(100) not null,
start_date date,
createdby varchar(40) default 'Abi',
createdat timestamp default current_timestamp,
updatedby varchar(30),
updatedat timestamp default current_timestamp,
status boolean default true

);

alter table courses add course_status enum('active', 'inactive') default 'active';
alter table courses rename column trainer_name to instructor_name;
alter table courses modify duration int default 3;
alter table courses drop column start_date;