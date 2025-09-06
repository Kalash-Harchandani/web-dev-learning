// // Entire html can be accessed here in document model which is present in window object
// console.log(window.document) // This shows are entire html on console in browser
// console.dir(window.document) //prints object
// // So basically this is Document Object Model (DOM), it is a tree like structure
// console.dir(document.body)
// console.log(document.body)
// // DOM is used to dynamically change a site
// // HTML and CSS is the blueprint,
// // DOM is the live structure the browser builds from it,
// // JavaScript is the tool to play with that structure.

// // DOM manipulation

// // Using id
// let heading = document.getElementById("heading");// if not present return null 
// console.dir(heading);

// //using class
// let content = document.getElementsByClassName("Content"); // if not present empty html collection
// console.dir(content); // returns html collections

// //using tag
// let divs = document.getElementsByTagName("div");
// console.dir(divs);

// //best way
// let elements = document.querySelector("p"); //auto recognise the type
// console.dir(elements); // first para

// let fDiv = document.querySelector("div"); //auto recognise the type
// console.dir(fDiv); // first para

// let elements2 = document.querySelectorAll("p"); //auto recognise the type
// console.dir(elements2); // all para return node list 



// // accessing/get attribute 
// let div = document.querySelector("div");
// console.log(div);

// let class1 = div.getAttribute("class");
// console.log(class1);

// // set attribute
// let div = document.querySelector("div");
// console.log(div.setAttribute("class","boxy"));

// // Styling
// let div = document.querySelector("div");
// console.log(div.style);
// div.style.backgroundColor = "yellow";
// div.style.fontSize = "24px";

// // Insert Elements

// let newButton = document.createElement("button");
// console.log(newButton);

// let para = document.querySelector("p");

// para.append(newButton);
// para.prepend(newButton);
// para.before(newButton);
// para.after(newButton);

// // Delete 
// let para = document.querySelector("p");
// para.remove();

// Append Child Remove Child