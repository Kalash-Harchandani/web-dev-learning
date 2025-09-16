// The change in the state of an object is known as event events are fired to notify code of interesting changes that may affect code execution

// Mouse Event (click,double click)
// Keyboard Event (keypress,keyup)
// & many more

// js > inline
let btn1 = document.querySelector("#btn1");
btn1.onclick = (e) => {
    console.log(e); // event object - all details
    console.log(e.type);
    console.log('btn1 was clicked');
}

// event listeners -most used

const handler = ()=>{
    console.log('btn1 was clicked wohoo');
};

btn1.addEventListener("click",handler);
btn1.removeEventListener("click",handler);