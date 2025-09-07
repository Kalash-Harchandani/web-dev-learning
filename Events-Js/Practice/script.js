let btn1 = document.createElement("button");
btn1.innerText = "click me !";
let body = document.querySelector("body");
body.after(btn1);

let mode = "light";

btn1.addEventListener("click",() =>{
    // can use css class for better styling
    if(mode=="light"){
        mode = "dark";
        body.style.backgroundColor = "black";
    }else{
        mode = "light";
        body.style.backgroundColor = "white";
    }
    console.log(mode);

});
