/*
Days Of The Week Exercise
Write a function called returnDay. this function takes in one 
parameter (a number from 1-7) and returns the day of the week 
(1 is Monday, 2 is Tuesday, etc.)  If the number is less than 1
or greater than 7, the function should return null. 
In some countries Sunday is treated as the first day of the week, 
but for this exercise we will use Monday as the first day.

Hint: store the days of the week in an array, 
or use an object with numerical keys.  When the function is called, 
plug the number into the array/object you've created to retrieve 
the corresponding day name and then return that value.

returnDay(1) // "Monday"
returnDay(7) // "Sunday"
returnDay(4) // "Thursday"  
returnDay(0) // null

*/

//  I will use the objects to iterate over it  ar oita te key jeita asbe seita match khabe jeita input korche


// Solution 1(using arrays).
function returnDay(date) {
    if (date < 1 || date > 7) {
        return null;
    }
    else {
        const days = ["Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday", "Sunday"];
        return days[date - 1];
    }
}


// Solution 2(using objects).
function returnDay(date) {
    if (date < 1 || date > 7) {
        return null;
    }
    else {
        const days = {
            1: "Monday",
            2: "Tuesday",
            3: "Wednesday",
            4: "Thrusday",
            5: "Friday",
            6: "Saturday",
            7: "Sunday"
        }
        return days[date];
    }
}
