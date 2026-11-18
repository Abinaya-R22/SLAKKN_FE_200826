create database studentcoursedb;
use studentcoursedb;

create table student_course_1nf (

sdu_id int auto_increment,
studentname varchar(20),
course varchar(30),
skills varchar(20),

PRIMARY key (sdu_id,course,skills)

);

insert into student_course_1nf values (1,"Arun","Java","HTML"),(1,"Arun","Java","CSS"),(1,"Arun","Java","JS"),(1,"Arun","Java","Node");


select * from student_course_1nf;


create table studenttable_2nf (

sdu_id int auto_increment,
studentname varchar(20),
skills varchar(20),

primary key (sdu_id,skills)

);

insert into studenttable_2nf values (1,"Arun","HTML"),(1,"Arun","JS"),(2,"Rube","CSS");
select * from studenttable_2nf;

create table trainer (

t_id int auto_increment,
tname varchar(20),
skills varchar(20),

primary key(t_id,skills)


);

insert into trainer values (1,"Mugund","MERN"),(2,"Venkat","Java"),(3,"Arun","AWS");

select * from trainer;

create table coursetable (

c_id int primary key auto_increment,
cname varchar(20),
cfees varchar(20)

);
insert into coursetable values (1,"MERN","30000"),(2,"Java","40000"),(3,"AWS","50000");

select * from coursetable;

create table enrollment (

eid int auto_increment,
sdu_id int,
c_id int,
t_id int,
primary key(eid,sdu_id,c_id,t_id),


foreign key (sdu_id) references studenttable_2nf (sdu_id),
foreign key (c_id) references coursetable (c_id),
foreign key (t_id) references trainer (t_id)

);

insert into enrollment values (1,1,2,2);

select * from enrollment;

select * from enrollment as e inner join studenttable_2nf as stu inner join coursetable as c inner join  trainer as t on e.c_id = c.c_id and e.t_id = t.t_id;


