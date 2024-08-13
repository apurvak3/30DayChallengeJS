//write a async function that waits for a promise to resolve and then logs a resolved value. 

function fetchData(){
    return new Promise((resolve) =>{
        setTimeout(() => {
        resolve("Data fetched from server");
        },2000)
    })
}
async function logResolvedValue() {
    try{
        const Data = await fetchData();
        console.log("Resolved value:", Data);

    }catch(error){
        console.log("Hey error occured", error)
    }
    
}
