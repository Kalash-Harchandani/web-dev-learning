let newBtn = document.createElement("button");
let body = document.querySelector("body");
body.prepend(newBtn);
newBtn.style.backgroundColor = "red";
newBtn.innerText = "Click me";

let para = document.createElement("p");
para.setAttribute("class","content");
body.append(para);
para.innerText = "lorem ipsum ...."
para.style.backgroundColor = "red";
// inline css wins over class styles
console.log(para)

