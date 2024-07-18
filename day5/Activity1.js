//Activity1:Function Declaration
/**
 * task1:Write  a function to check if a number is even or odd and log the result to the console.
 * Task2:write a function to calculate the square of a number and return the result.
 * 
 */
//task1:
function evenOrOdd(num){
    result = (num %2 == 0) ? "even" : "odd";
    console.log(result);

}
evenOrOdd(18);
evenOrOdd(17);
//task2:
function squareNumber(num){
result = num * num;
console.log(result);
}
squareNumber(4);
squareNumber(25);