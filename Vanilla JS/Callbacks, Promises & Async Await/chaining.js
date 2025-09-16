// Comsider this as an API
function async (){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("some data 1");
            resolve("success");
        },2000);
    });
}

function async2 (){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("some data 2");
            resolve("success");
        },2000);
    });
}

// we get promise from api
// console.log("fetching result-1");
// async().then((res)=>{
//     console.log(res);
//     console.log("fetching result-2");// Chaining to maintain chronology
//     async2(). then((res)=>{
//     console.log(res);
//     });
// });


//best way to write

async()
    .then((res)=>{
        return async2();
    })
    .then((res)=>{
        console.log(res);
    });


// console.log("fetching result-2");
// let p2 = async2();
// p2.then((res)=>{
//     console.log(res);
// });
