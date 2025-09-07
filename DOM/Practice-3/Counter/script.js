let div = document.createElement("div");
div.innerHTML="0";
div.style.fontSize="30px";
let body = document.querySelector("body");
body.append(div);
console.log(div);

let btn1 = document.createElement("button");
btn1.innerHTML="-";
div.after(btn1);

let btn2 = document.createElement("button");
btn2.innerHTML= "+";
btn1.after(btn2);

let count = 0;

function update(){
    div.innerHTML=count;
}

btn1.addEventListener("click",function(){
    count--;
    update();
});

btn2.addEventListener("click",function(){
    count++;
    update();
});