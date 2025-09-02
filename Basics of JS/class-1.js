// Alert -> Pop on opening a page 
alert("Kalash");

//Print
console.log("Hello World");
console.log("Kalash");

//variables
fName = "Max verstappen";
console.log(fName);

// We do not have to define datatype to intialise variables
// Two extra data types
x = null;
console.log(x);

y=undefined;
console.log(y);


// Keywords - let,const,var(good practice)

//in-general
let fullName = "Max verstappen";
fullName = "Super Max"//updatation
console.log(fullName); 

// var was used before 2015 so no use of that now
// main problem using var you can re declare a variable

//use const when you dont want to change 
const pie = 3.14;
console.log(pie);

let a;
//by default it gets undefined

// const b;
//this will give error

//var - only keyword which is global specific

// // almost same data types as cpp - Prim(number(1,2,3,-1,2.3...),string(kalash,joe,...),bool,undefined,null,bigint,symbol) and Non-prim(objects(collection of values)-arrays,functions)
typeof fullName;//gives dataType


// //object

const student = {
    name : "rahul",
    age : 18,
    cgpa : 7.0,
    isPass : true,
};

// // access
console.log(student.age);
student["age"];
// const can not be updated but keys can
//increase or update
console.log(student.name);
console.log(student.cgpa);
student["name"] = "kalash";
student["cgpa"] += 1;
console.log(student.name);
console.log(student.cgpa);

const product = {
    productName: "",
    rating: 0,
    noOfReviews: 0,
    specialTag: "",
    sellingPrice: 0,
    MRP: 0,
    discount: ""
};

product.productName = "Parker Jotter";
product.rating = 4;
product.noOfReviews = 7000;
product.specialTag= "Deal of the Day";
product.sellingPrice = 270;
product.MRP = 285;
product.discount = '5%';

console.log(product);