//logical operator
/**
 * task11.write a program that uses the && operator to combine two condition and log the result to the console.
 * task12.write a program that uses the || operator to combine two condition and log the result to the console.
 * task13.write a program that uses the ! operator to combine two condition and log the result to the console.
 */

function checkConditions(num1, num2) {
    // Using the && operator to combine two conditions
    let result = (num1 > 0 && num2 > 0) ? 'Both numbers are positive' : 'At least one number is not positive';

    console.log(result);
  }
  
  
  checkConditions(5, 10);   
  checkConditions(-3, 7);   
 
  function orOperator(num1, num2){
    let result2 = (num1>0 || num2 >0) ? 'both numbers are positive ' : 'At least one number is not positive';
    console.log(result2)
  }
  orOperator(3,4)