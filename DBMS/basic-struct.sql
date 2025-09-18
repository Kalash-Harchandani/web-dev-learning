CREATE DATABASE IF NOT EXISTS xyz;
USE xyz;

CREATE TABLE emp(
	id INT PRIMARY KEY,
    name VARCHAR(50),
    salary INT
);


INSERT INTO emp(id,name,salary)
VALUES

	(1,"adam",25000),
    (2,"bob",30000),
    (3,"casey",40000);
    
SELECT * FROM emp;
    


