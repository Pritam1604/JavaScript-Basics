// 1. Filter an array of numbers to get only the even numbers.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter(num => num%2 === 0)
// One-liner code

// 2.  **Filter an array of strings to get only the strings that start with the letter "a".**

const strings = ["apple", "banana", "cherry", "durian", "eggplant","adfoighjdhj",'dilkjghtrioh',"akjfdgh"];

const startWithA = strings.filter(letter=>letter[0]==="a");

// 3. **Filter an array of objects to get only the objects that have a property called "name" with the value "John".**

const objects = [
    { name: "John", age: 20 }, 
    { name: "Jane", age: 21 }, 
    { name: "Mary", age: 22 }
];
const objectsWithNameJohn = objects.filter(object => object.name === "John");

// const nameWithJohn = objects.filter(()=>{
//     for(i=0;i<objects.length;i++){
//         if(objects[i].name === "John"){
//             return objects[i];
//         }
//     }
// })

// 4. *Filter an array of arrays to get only the arrays that have three elements 

const arrays = [[1, 2, 3], [4, 5, 6], [7, 8, 9,0], [10, 11, 12]];

const sorted = arrays.filter(arr=> arr.length===3)







