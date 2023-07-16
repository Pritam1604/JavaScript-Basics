// To check the largest of three numbers

const number1 = prompt("Enter 1st num: ");
const number2 = prompt("enter the second second number: ");
const number3 = prompt("Enter the 3rd number: ");
let largest;

if (number1 > number2 && number1 > number3) {
    largest = number1
}
else if (number2 > number1 && number2 > number3) {
    largest = number2
}
else if (number3 > number1 && number3 > number2) {
    largest = number3;
}

console.log(`The largest Number is ${largest} among the numbers ${number1},  ${number2} and ${number3}`);

