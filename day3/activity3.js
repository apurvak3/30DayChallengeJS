//Activity -3:switch case
/**
 * task4:Write a program that uses a switch case to determine the day of the week based on a number(1-7) and log the day name
 * to the console.
 * task5:write a program that uses a switch case to assign a grade('A','b')based on the score and log the grade to the console.
 */

function getdayName(dayNumber){
    let dayName;
    switch(dayNumber){
        case 1:
        dayName = monday;
        case 2:
            dayName = tuesday;
            case 3:
                dayName = wednesday;
                case 4:
                    dayName = thursday;
                    case 5:
                        dayName = friday;
                        case 6:
                            dayName = saturday;
                            case 7:
                                dayName = sunday;

                                default:
                                    dayName ='Invalid day name';
                                    break;
    }
    console.log(dayName);
}
getdayName(1);
getdayName(4);

//task 2
