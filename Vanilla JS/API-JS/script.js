// API - Request/Response Cycle or Sending/Receiving resources
// API - Application Programming Interface

const URL = "https://api.kanye.rest";
const p = document.querySelector("#info");
const btn = document.querySelector("#btn");
 btn.innerHTML = "Click me for kanye fact";
const getFact = async ()=>{
    let respone = await fetch(URL);
    console.log(respone);
    let data = await respone.json();
    console.log(data.quote);
    p.innerText = data.quote;
   
};
btn.addEventListener("click",getFact);
