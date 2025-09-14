// JS object - entity having state and behaviour

const student = {
    //direct way
    fullName : "K H",
    marks: 99,
    printMarks: () => {
        console.log(student.marks);
    }
}
// Prototype object inside object or a property inside object as a object

let arr = ['banana','mango']
// arr is also object is js
// Every object has prototype, it helps in inherting general functions like push, print etc 

const emp = {
    calcTac: () =>{
        console.log("10%");
    }
};


const karanArjun = {
     salary : 120000
};

const kalash = {
    salary : 3000000,
    calcTac: () =>{
        console.log("20%"); //this over proto
    }
}

// setting up manual proto to inherit functions
karanArjun.__proto__ = emp;
kalash.__proto__ = emp;


// Objects through classes , classes is a template to create multiple objects simple

class Car{
    constructor(brand,mileage){
       //intialise object
       console.log("Creating new object");
       this.brandName = brand;
       this.mileage = mileage;
    }
    start(){
        console.log("Start");
    }
    stop(){
        console.log("Stop"); 
    }
}

let fortuner = new Car("Fortuner",35);
let lexus = new Car("Lexus",17);


//Inheritance - passing down traits from parents to child

class Ferrari extends Car{
    constructor(price,mileage){
        super(null,mileage);
        delete this.brandName;
        this.price=price;
    }
    trait(){
    console.log("best car in the world");
    }
    start(){
        console.log("Beast is starting");
        super.stop(); // Overwriting
    }
}

let f12 = new Ferrari("1 million usd",15);