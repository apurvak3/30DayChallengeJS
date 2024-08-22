//condition operator
/**
 * task 6:write a program that uses the ternary operator to check a number is even or odd and log the result to the console.
 * 
 */

function checkNumberEvenOrOdd(num){
    const result = (num % 2 === 0) ? "even" : "odd ";
    console.log(result);

}
checkNumberEvenOrOdd(6);
checkNumberEvenOrOdd(7);

