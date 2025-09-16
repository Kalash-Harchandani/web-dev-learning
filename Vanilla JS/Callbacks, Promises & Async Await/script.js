// At end we should get clear that async await >> promise chains >> callback hell

//Sync in JS means the code runs in a particular sequence of intructions given in the program - each instruction waits for the previous intruction to complete its execution
console.log(1);
console.log(2);
console.log(3);

//Async in JS - sometimes imp instructions get blocked due to some previous intructions, which causes delay in UI, Async code execution allowes to execute next instructions immediately and doesn't block the flow

console.log(1);
console.log(2);
function hello(){
    console.log("hello");
}
setTimeout(hello,4000);
console.log(3);


function sum(a,b){
    console.log(a+b);
}
// Callback
function calc(a,b,sumCallback){
    sumCallback(a,b);
}

calc(4,5,sum);

//Callback hell - nested callbacks