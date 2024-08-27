//If -Else Statement
/**
 * task1:Write a prgram to check if a number is positive, negative, or zero,and log the result to the console.
 * task2:write a program to check if a person is eligible to vote(age >= 18) and log the result to the console.
 */
function Statement(num1){
    if(num1 >0){
        console.log("number is positive")
    }else if(num1 < 0){
        console.log("number is negative")
    }else{
        console.log("number equal to zero")
    }
}
Statement(20);
Statement(-16);
Statement(0);

//task 2
function eligibility(age){
    if(age >= 18){
        console.log("person is eligible to vote");
    }else{
        console.log("Person is ineligible");
    }
}
eligibility(21);
eligibility(16);