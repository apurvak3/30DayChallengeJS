//chaining promises
/**
 * create a sequence of that stimulate fetching data from a server.Chain the promises to log message in a specific order.
 */
  function fetchData1(){
    return new Promise((resolve) =>{
        setTimeout(() => {
            console.log("Fetched data from server1");
            resolve("Data 1");
        }, 2000);
    })
  }

  function fetchData2(){
    return new Promise((resolve) =>{
        setTimeout(() =>{
        
                console.log("fetch data from server2");
                resolve("data 2")
            } ,2000);
        })

  }
   function fetchData3(){
    return new Promise((resolve) =>{
            setTimeout(() =>{
                console.log("fetch data from server 3");
                resolve("data3");
            } ,2000);
    })
   }

  fetchData1() 
  .then((Data1) =>{
    console.log("Processing " , Data1);
    return fetchData2;
  })
  .then((Data2) =>{
    console.log("Processing", Data2);
    return fetchData2;
  })
  .then((Data3) =>{
    console.log("Processing" , Data3);
    console.log("All Data is fetched");
  })
  .catch((error) =>{
    console.log("Hey there error exits");
  })