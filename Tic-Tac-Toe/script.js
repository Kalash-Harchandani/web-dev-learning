let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newBtn = document.querySelector('#new');
let msg = document.querySelector('#msg');
let msgC = document.querySelector('.msg-c')


let turnO = true;
let arr = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("clicked")
        if(turnO==true){
        box.innerText = "O";
        turnO = false;
        }else{
            box.innerText = "X";
            turnO=true;
        }
        box.disabled= true;

        checkWinner()
    });
});

const enableBox = () =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerHTML="";
    }
};

const disableBox = () =>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const showWinner = (winner) =>{
    msg.innerHTML = `Congrats, Winner is ${winner}`;
    msgC.classList.remove("hide");
};

const resetGame = () =>{
    turnO = true;
    enableBox();
    msgC.classList.add("hide");
};

const checkWinner = () =>{
    for(pattern of arr){
        let pos1 =    boxes[pattern[0]].innerText;
        let pos2 =    boxes[pattern[1]].innerText;
        let pos3 =    boxes[pattern[2]].innerText;

        if(pos1!="" && pos2!="" && pos3!= ""){
            if(pos1==pos2 && pos2==pos3){
                console.log('winner',pos1);
                disableBox();
                showWinner(pos1);
            }
        }
    }
};

newBtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);