//Loop Control Statement
/**
 * task8:print number from 1 to 10 but skip the number 5 using the continue statement
 * task9:print number from 1 to 10 but stop the loop while the number is 7 using break statement.
 */
for(let i =0 ;i<=10; i++){
    if(i==5){
        continue;
    }
    console.log(i);
}
//task9;
for(let j=1 ; j<= 10; j++){
    if(j ==7){
        break;
    }
    console.log(j);
}