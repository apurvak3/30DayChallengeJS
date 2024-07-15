//combining condition
/**
 * write a program to check if a year is a leap year using multiple condition (divisible by 4, but not 100 unless also divisible
 * by 400) and log the result to the console.
 */
 function year(num){
    const years = (num % 4 === 0 )&&  (num % 100 != 0  || num %400 != 0 );
     console.log(isLeap ? `${year} is a leap year.` : `${year} is not a leap year.`);

 }
 year(2026);