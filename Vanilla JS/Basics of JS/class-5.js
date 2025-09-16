
// function funcPrint(arr){
//     // arr->local variable
//     for(let i=0;i<arr.length;i++){
//         console.log(arr[i]);
//     }
// }

// const arrowPrint = (arr) => { // Arrow Function
//     for(let i=0;i<arr.length;i++){
//         console.log(arr[i]+5);
//     }
// }

// let brrr = [1,2,3,4,5];
// funcPrint(brrr);
// arrowPrint(brrr);

// function countVowels(string){
//     let count = 0;
//     for(let i=0;i<string.length;i++){
//         if(string[i]=='a' || string[i]=='e'  || string[i]=='o' || string[i]=='i' || string[i]=='u'){
//             count++;
//         }
//     }
//     return count;
// }

// const arrowVowel = (string) => {
//     let count = 0;
//     const vowels = 'aeiou';
//     for(let i=0;i<string.length;i++){
//         let ch = string[i];
//         if(vowels.includes(ch)){
//             count++;
//         }
//     }
//     return count;
// }


// let name = "apnacollege";
// console.log(countVowels(name));
// console.log(arrowVowel(name));


// Callback - a function passed as an argument to another function

// function printHi() {
//     return "Hi";
// }

// function printName(callback) {
//     let name = "Kalash "; 
//     console.log(name + callback()); 
// }

// printName(printHi);


// For each

// let arr = [1,2,3,4,5];
// arr.forEach(function printVal(val){
//     console.log(val);
// });

//Higher Order Fucntion - take another function as paramter or return paramter as output;

// let arr = [1,2,3,4,5];

// arr.forEach(function func(val){
//     console.log(val*val);
// });

// let calc = (val)=>{
//     console.log(val*val);
// };

// arr.forEach(calc);

// Map function - creates new array and works similar as for each

// let arr = [1,2,3,4,5];

// let newArr = arr.map((vds)=>{
//     return vds*vds;
// });

// console.log(newArr);
// console.log(arr);

// Filter method - creates new array given true for a condition/filter

// let arr = [1,2,3,4,5,6];

// let evenArr = arr.filter((x) => {
//     return x>3; // any condition
// });

// console.log(evenArr);

//Reduce method - many inputs single output, eg-sum,avg

// let arr = [1,2,3,4];

// let output = arr.reduce((prev, curr) =>{
//     if(prev>curr){
//         return prev;
//     }else{
//         return curr;
//     }
// });

// console.log(output);

// let marks = [45,67,97,98,99,91,78,67];

// let ans = marks.filter((val)=>{
//     return val>=90;
// });

// console.log(ans); 

let input = prompt("Enter a number");

let arr = []
for(let i=1;i<=input;i++){
    arr[i] = i;
}

let sum = arr.reduce((prev,cur) => {
    return prev+cur;
});

let product = arr.reduce((prev,cur) => {
    return prev*cur;
});

console.log(sum);
console.log(product);