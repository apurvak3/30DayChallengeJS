//Higher-order function
/**
 * task9:write a higher-order function that takes a function and a number, and calls the function that
 * many time.
 * task10:write a higher-order functions and a value,applies the first function to the value,and then applies the second function to the result.
 */
function repeatFunction(fn, times){
    return function(){
        for( let i = 0;i<times; i++){
            fn();
        }
    }
}
const sayHello = () => console.log('say Hello');
const sayHelloFiveTimes = repeatFunction(sayHello , 5);
sayHelloFiveTimes();

function personBiography()