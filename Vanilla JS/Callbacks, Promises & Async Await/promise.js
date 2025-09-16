// // Promises is an object in JS and is for eventual completion of task

// let promise = new Promise((resolve,reject)=>{
//     console.log("I am a promise")
//     // resolve("success");
//     reject("failure");
// })

// // Promise work-flow
// function getData(dataId,dataNext){
//    return new Promise((resolve,reject)=>{
//    setTimeout(()=>{
//     console.log("data",dataId);
//     resolve("success");
//         if(dataNext){
//             dataNext();
//         }  
//    },5000);
//    });
// }

// .then->after resolve and .catch-> after reject

const getProm = () =>{
    return new Promise((resolve,reject)=>{
        reject("Network");
    });
}

let promise = getProm();
promise.then((res)=>{
    console.log("Fulfilled");
})
promise.catch((err)=>{
    console.log("Error",err);
})