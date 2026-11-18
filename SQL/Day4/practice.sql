-- create database normal_db;
-- use normal_db;


-- create table patients(
-- p_id int auto_increment,
-- p_name varchar(100),
-- gender varchar(30),
-- primary key(p_id)
-- );
-- SET SQL_SAFE_UPDATES = 1;

select* from employees ;
select name,department,salary from employees;
select distinct city,department from employee;
select * from employees where salary>40000 and age<30;
select * from employees where department in('IT','HR');
1.Display all employee records and then display only employee names, departments, and salaries.
2. Display unique cities and departments using DISTINCT.
3. Find employees whose salary is greater than ₹40,000 and age is less than 30.
4. Find employees working in IT or HR using IN and logical operators.
5. Find employee names starting with 'A' and ending with 'a' using LIKE.
6. Display the top 3 highest-paid employees using ORDER BY and LIMIT.
7. Display employee names in uppercase and calculate annual salaries using built-in functions.
8. Display employee names, joining years, and the number of days since joining.
9. Find the total employee count, total salary, average salary, highest salary, and lowest salary.
10. Display department-wise employee count and total salary using GROUP BY.
11. Display city-wise employee count, sorted from highest to lowest.
12. Find departments with more than 2 employees using HAVING.
13. Find departments with average salary above ₹40,000 using GROUP BY and HAVING.
14. Find departments with at least 2 employees earning more than ₹30,000, sorted by average salary descending.

select * from employees where department='IT' or department='HR';
select * from employees where employee_name like 'a%a';
select * from employees order by emp_name  desc limit;

