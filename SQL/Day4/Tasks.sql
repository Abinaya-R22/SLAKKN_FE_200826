CREATE DATABASE IF NOT EXISTS sql_practice;
USE sql_practice;
CREATE TABLE employees (
    emp_id INT PRIMARY KEY,
    emp_name VARCHAR(100) NOT NULL,
    department VARCHAR(50),
    salary DECIMAL(10,2),
    age INT,
    city VARCHAR(50),
    experience INT
);
INSERT INTO employees VALUES
(1, 'Arun', 'IT', 45000, 25, 'Chennai', 3),
(2, 'Priya', 'HR', 35000, 27, 'Madurai', 4),
(3, 'Kavin', 'IT', 55000, 29, 'Chennai', 6),
(4, 'Divya', 'Finance', 40000, 26, 'Salem', 3),
(5, 'Rahul', 'IT', 30000, 23, 'Trichy', 2),
(6, 'Meena', 'HR', 38000, 28, 'Chennai', 5),
(7, 'Vijay', 'Finance', 60000, 32, 'Madurai', 8),
(8, 'Sneha', 'IT', 48000, 24, 'Salem', 4),
(9, 'Bala', 'Sales', 28000, 22, 'Chennai', 1),
(10, 'Nisha', 'Sales', 32000, 26, 'Trichy', 3),
(11, 'Sanjay', 'IT', 65000, 31, 'Chennai', 9),
(12, 'Anu', 'HR', 42000, 29, 'Salem', 6),
(13, 'Deepak', 'Finance', 52000, 30, 'Chennai', 7),
(14, 'Pooja', 'Sales', 36000, 25, 'Madurai', 4),
(15, 'Ravi', 'IT', 58000, 28, 'Trichy', 7);

-- SELECT * FROM employees;
-- select department,count(*) as total_emp,min(salary) from employees group by department having min(salary)>=30000;

select count(*) from employees where department='IT' and salary>30000;
select department,count(*) as tot_no_emp from employees group by department;
select department,count(*) from employees where salary>25000 group by department having avg(salary)>40000;
 
 
 
 CREATE TABLE students (
    student_id INT PRIMARY KEY,
    student_name VARCHAR(100) NOT NULL,
    age INT,
    city VARCHAR(50),
    course VARCHAR(50),
    marks INT
);

INSERT INTO students VALUES
(1, 'Arun', 20, 'Chennai', 'BCA', 85),
(2, 'Priya', 22, 'Madurai', 'BSc CS', 90),
(3, 'Kavin', 17, 'Chennai', 'BCA', 75),
(4, 'Divya', 24, 'Trichy', 'BCom', 80),
(5, 'Rahul', 19, 'Madurai', 'BSc CS', 78),
(6, 'Meena', 26, 'Chennai', 'BCA', 88),
(7, 'Vijay', 21, 'Salem', 'BCom', 70),
(8, 'Sneha', 25, 'Chennai', 'BSc CS', 92),
(9, 'Bala', 23, 'Madurai', 'BCA', 82),
(10, 'Nisha', 18, 'Trichy', 'BCom', 76);


select * from students where age between 18 and 25 and city in('Chennai','Madurai');


CREATE TABLE products (
    product_id INT PRIMARY KEY,
    product_name VARCHAR(100) NOT NULL,
    category VARCHAR(50),
    price DECIMAL(10,2),
    stock INT
);
INSERT INTO products VALUES
(1, 'Laptop', 'Electronics', 55000, 10),
(2, 'Mobile', 'Electronics', 20000, 15),
(3, 'Headphones', 'Electronics', 2500, 20),
(4, 'Shirt', 'Clothing', 1200, 30),
(5, 'Jeans', 'Clothing', 1800, 25),
(6, 'Jacket', 'Clothing', 2500, 10),
(7, 'Table', 'Furniture', 5000, 8),
(8, 'Chair', 'Furniture', 2500, 12),
(9, 'Sofa', 'Furniture', 25000, 5),
(10, 'Notebook', 'Stationery', 50, 100);

select category,sum(stock),avg(price) from products group by category ;