const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json"

const dropdown = document.querySelectorAll(".dropdown select");
const btn = document.querySelector(".exc");

for(let select of dropdown){
for (code in countryList){
    let newOption = document.createElement("option");
    newOption.innerText = code;
    newOption.value = code;
    if(select.name=="from" && code == "USD"){
        newOption.selected = "selected";
    }
     if(select.name=="to" && code == "INR"){
        newOption.selected = "selected";
    }
    select.append(newOption);
}
select.addEventListener("change",(evt)=>{
    updateFlag(evt.target);
})
}

const updateFlag = (elem) =>{
    let code = elem.value;
    let countryCode = countryList[code];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = elem.parentElement.querySelector("img");
    img.src = newSrc;
};

btn.addEventListener("click", async (evt) => {
  evt.preventDefault();

  let amount = document.querySelector(".amount input");
  let amtValue = amount.value;
  if (amtValue === "" || amtValue < 1) {
    amtValue = 1;
  }


  let fromCurr = dropdown[0].value.toLowerCase();
  let toCurr = dropdown[1].value.toLowerCase();

 
  const URL = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurr}.json`;

  
  let response = await fetch(URL);
  let data = await response.json();

  
  let rate = data[fromCurr][toCurr];


  let finalAmount = (amtValue * rate).toFixed(2);

  
  const msg = document.querySelector(".msg");
  msg.innerText = `${amtValue} ${fromCurr.toUpperCase()} = ${finalAmount} ${toCurr.toUpperCase()}`;
});
