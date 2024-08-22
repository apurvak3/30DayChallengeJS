//Activity 5
/**
 * write a program that uses the ternary operator to check is a number is positive or negative and log the result to the console.
 */
// Function to check if a number is positive or negative
function checkNumber(num) {
    // Using ternary operator to determine if the number is positive or negative
    let result = (num >= 0) ? 'Positive' : 'Negative';
    // Logging the result to the console
    console.log(`The number ${num} is ${result}.`);
  }
  
  // Test the function with different numbers
  checkNumber(10);  // The number 10 is Positive.
  checkNumber(-5);  // The number -5 is Negative.
  checkNumber(0);   // The number 0 is Positive.
  