//Actitivity 4
/**
 * task7:write a function that take two parameters and return their product.Provide a default value for the second parameter.
 * task8:write a function that take persons name age and returns greeting msg.provide a default val for the age.
 * 
 */
 function multiply(a , b=6){
    result = a *b;
 console.log(result);
 }

 multiply(4);
 multiply(8);

 //task2
 function greeting(name , age=26){
    return `Hey my name is ${name}! and my age is ${age}.Nice to meet you`;
 }
 console.log(greeting("Apurva","22"));
