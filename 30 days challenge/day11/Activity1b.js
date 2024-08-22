//task2:Creata a message that reject with a error after a 2 sec timeout and manage the error using .catch 
const promiseTwo = new Promise(function(Response , Reject){ 
    setTimeout(function() {
        const error = false;
        if(!error){
            console.log("hey It is correct")
        }else{
            console.log("Error!There is an error")
        }
    },1000 )
})
 promiseTwo.then((user) =>{
    console.log(user.username);
    return user.username;
 }).then((username) =>{
    console.log(username);
 })
 .catch(function(error){
    console.log(error);
 });
