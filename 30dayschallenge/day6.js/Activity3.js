//Array method
/**map,filter,reduce
 * use the map method to create a new array where each number is doubled and log the new array.
 * use the filter method to create a new array with even numbers and log the new array.
 * use the reduce method to sum all the members to the and log the new array
 * The map method creates a new array populated with the results of calling a provided function on every element in the calling array
 * The filter method creates a new array with all elements that pass the test implemented by the provided function.
 * The reduce method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
 * array.reduce(callback(accumulator, currentValue, index, array), initialValue);

 */
const number =[2,3,4,5,6];
const doubled = number.map((num) => num * 2);
console.log(doubled);
const number2 = [2,3,4,5,6,7,8,9];
const even = number2.filter((num) => num % 2 ==0 );
console.log(even);
const number3 = [10,12,14,16,18,19,20];
const sum = number3.reduce((acc ,num) => acc + num, 10 );
console.log(sum);

