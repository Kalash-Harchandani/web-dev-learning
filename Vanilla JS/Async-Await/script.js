//Async function always returns a promise

function api(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("weather");
            resolve(200);
        },2000);
    });
}

function getD(dataId){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log(dataId);
            resolve("Done"); 
        },2000); 
    });
}

async function func() {
    await getD(1);
    await getD(2);
    await getD(3);
}

async function getData() {
    // this maintains chronology
    await api();
    await api();
}

// await pauses the execution of the surronding async functions until the promise is settled

