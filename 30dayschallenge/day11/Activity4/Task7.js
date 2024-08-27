//Use the fetch Api to get data from public Api and log the response data to the console using async.

async function fetchData() {
    try{
        const response = await fetch('https://api.publicapis.org/entries');
        if(!response.ok){
            throw new console.error('Network response was not ok');
            
        }
        const data = new data
    }
    
}