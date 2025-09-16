// This prints all at once but sometimes we want sequential ordering
// getData(1);
// getData(2);
// getData(3);



// This function waits two seconds using `setTimeout`, then prints the given `dataId`. It represents fetching data asynchronously in JavaScript.

function getData(dataId,dataNext){
   return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("data",dataId);
        resolve("success");
            if(dataNext){
                dataNext();
            }  
    },2000);
   }); 
}


// For that we use callBacks

//CallBack hell - nested callbacks
// getData(1,()=>{
//     console.log("getting data...2");
//     getData(2,()=>{
//         console.log("getting data...3")
//         getData(3);
//     });
// });


// Solving this from promise chaining
// console.log("fetching data 1");
// getData(1).then((res)=>{
//     console.log(res);
//     console.log("fetching data 2");
//     getData(2).then((res)=>{
//         console.log(res);
//     });
// });

// Best way to write
getData(1)
    .then((res)=>{
        return getData(2);
    })
    .then((res)=>{
        console.log(res);
    });









