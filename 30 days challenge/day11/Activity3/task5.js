//write a async function that handles a rejected promise using try catch and log the error message;
const PromiseFive = new Promise(function(resolve, reject) {
   setTimeout(function(){
    let error = true;
    if(!error){
        resolve("Error does not exist");
    }else{
        reject("Error Exist");
    }
   })
})


async function alexa(){
    try {
        const response = await PromiseFive();
        console.log("problem resolve"); 
    } catch (error) {
        console.log("Error exist");
    }
}