let div = document.createElement("div");
let btn1 = document.createElement("button");
let btn2 = document.createElement("button");
let btn3 = document.createElement("button");
let body = document.querySelector("body");

div.innerText = "Hi my name is Kalash Harchandani !";
btn1.innerText = "Red";
btn2.innerText = "Green";
btn3.innerText = "Blue";
body.after(div);
div.after(btn1);
btn1.after(btn2);
btn2.after(btn3);

btn1.addEventListener("click",function(){
    div.style.backgroundColor = "Red";
});
btn2.addEventListener("click",function(){
    div.style.backgroundColor = "Green";
});
btn3.addEventListener("click",function(){
    div.style.backgroundColor = "Blue";
});





