CREATE DATABASE college;
USE college;

CREATE TABLE student(
	rollno INT PRIMARY KEY,
	name VARCHAR(50),
    marks INT NOT NULL,
    grade VARCHAR(1),
    city VARCHAR(20)
);

INSERT INTO student(rollno,name,marks,grade,city)
VALUE
(101,"anil",78,"C","Pune"),
(102,"bhumika",93,"A","Mumbai"),
(103,"chetan",85,"B","Mumbai"),
(104,"dhruv",96,"A","Delhi"),
(105,"emanuel",12,"F","Delhi"),
(106,"farah",82,"B","Delhi");

SELECT DISTINCT city FROM student;
SELECT * FROM student WHERE grade ="A";
SELECT * FROM student WHERE marks<50;
SELECT * FROM student WHERE marks>50 AND grade ="B";
SELECT * FROM student WHERE marks<50 OR grade ="B";
SELECT * FROM student WHERE marks BETWEEN 75 AND 85;
SELECT * FROM student WHERE city IN("Delhi","Pune");
SELECT * FROM student WHERE city NOT IN("Delhi","Pune");
SELECT * FROM student LIMIT 3;
SELECT * FROM student WHERE marks>50 LIMIT 2;
SELECT * FROM student ORDER BY marks ASC;
SELECT * FROM student ORDER BY marks DESC LIMIT 2;s
SELECT * FROM student ORDER BY city ASC;
SELECT avg(marks) FROM student;
SELECT max(marks) FROM student;
SELECT min(marks) FROM student;
SELECT sum(marks) FROM student;
SELECT count(city) FROM student;
SELECT city,count(name) FROM student GROUP BY city;
SELECT grade,count(name) FROM student GROUP BY grade ORDER BY grade ASC;

-- Write the query to find avg marks in each city in ascending order

SELECT avg(marks),city FROM student GROUP BY city ORDER BY avg(marks); 

SELECT grade,count(name) FROM student  GROUP BY grade HAVING grade < 'C'  ORDER BY grade ASC ;
 

-- Chain of order select,from,where,group by,having,order by