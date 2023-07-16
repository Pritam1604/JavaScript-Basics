// I want to print even numbers but not by using i+=2 but by using if else to check weather the number is even or odd. 
// and if even it will be printed and if not it wont be printed.

const startNum = prompt("Enter the starting number for printing out even numbers: ");
const stopNum = prompt("Enter the ending point till where to print the even numbers: ");
for (let i= startNum; i <=stopNum; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
    else {
    }
}



