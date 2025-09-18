-- CONSTRAINTS

CREATE DATABASE student;
USE student;	

CREATE TABLE batch03(
	
    id INT PRIMARY KEY, -- MAKES IT UNIQUE AND NOT NULL;
    city VARCHAR(20) CHECK (city='Delhi'),
    college VARCHAR(20) DEFAULT 'BENNETT'
);

INSERT INTO batch03(id,city,college)
VALUES
(86,"Delhi",college),
(68,"Delhi",college);
-- (56,"Mumbai",college);

SELECT * FROM batch03

