//? 1) Write a program that checks whether a number is even or odd.

// let userNum = +prompt("Enter number to check even or odd");
// if (userNum % 2 === 0) {
//     console.log(`${userNum} is even`);
// } else {
//     console.log(`${userNum} is odd`);
// }

//? 2) If someone's age is more than or equal to 18, print "Eligible to vote", otherwise print "Not eligible".

// let userAge = +prompt("Enter age to check eligible for vote or not");
// if (userAge >= 18) {
//     console.log(`Eligible to vote`);
// } else {
//     console.log(`Not eligible`);
// }

//? 3) Print numbers from 1 to 10 using a for loop.

// for (let num = 1; num <= 10 ; num++) {
//     console.log(num);
// }

//? 4) Print even numbers between 1 to 20 using a while loop.

// let num = 1;
// while (num <= 20) {
//     if (num % 2 === 0) console.log(num);
//     num++
// }

//? 5) Print the reverse of a given string using a for loop.

// let str = "Hello";
// let storedString = "";

// for (let i = 0; i < str.length; i++) {
//    let reversedString = str.split("").reverse().join("");
//    storedString = reversedString;
// }

// console.log(storedString);

//? 6) Write a function that adds two numbers and returns the result.

// const sum = (a,b) => a + b;
// console.log(sum(2,2));

//? 7) Write a function that returns the factorial of a number.

// const factorial = (n) => {
//   let result = 1;
//   for (let i = 2; i <= n; i++) {
//     result *= i;
// }
// return result;
// }
// console.log(factorial(5));

//? 8) Write a function that checks if a given string is a palindrome (e.g., "madam").

// const isPalindrome = (word) => {
//   let palindrome = word.toLowerCase().split("").reverse().join("");
//   if (word === palindrome) {
//     console.log(`${word} is palindrome`);
//   } else {
//     console.log(`${word} is not palindrome`);
//   }
// };

// isPalindrome("hello");
// isPalindrome("madam");

//? 9) Create an object student with the following properties: name, rollNo, marks, isPassed

const student = {
  name: "Suraish",
  rollNo: 21,
  marks: 80,
  isPassed: true,
};

//? 10) Access the properties of the student object using dot and bracket notation.

// console.log(student.name , student.rollNo , student.marks , student.isPassed);
// console.log(student["name"], student["rollNo"], student["marks"], student["isPassed"]);

//? 11) Add a method inside the student object that prints:"Hello, I am [name]"

// student.greet = function() {
//     console.log(`Hello, I am ${student.name}`);
// }

// student.greet();

//? 12) Create a function that takes an object and prints all keys and values using a loop.

// const printsObjProperties = (obj) => {
//     for (const key in obj) console.log(`${key}: ${obj[key]}`);
// }

// printsObjProperties(student)

//? 13) Create an array of your favorite fruits.
const favFruits = ["Apple", "Banana", "Mango", "Orange", "Tomatto"];
// console.log(favFruits);

//? 14) Add a new fruit to the array.
// favFruits.push("PineApple");
// console.log(favFruits);

//? 15) Remove the last fruit from the array.
// favFruits.pop();
// console.log(favFruits);

//? 16) Check if "banana" is present in the array using .includes().

// if (favFruits.includes("Banana")) {
//     console.log(`Yes "Banana" is present in [${favFruits}]`);
// }

//? 17) Create an array of numbers. Return a new array where each number is multiplied by 2.
// const numbers = [1,2,3,4,5,6,7,8];
// const multiplyNumbers = numbers.map( element => element * 2 )
// console.log(multiplyNumbers);

//? 18) Create an array of ages. Return only those who are 18 or older.
const ages = [5, 20, 30, 80, 50, 10, 25, 12, 18, 17];

// const adults = ages.filter( element => {
//     if (element >= 18) return element;
// })

// console.log(adults);

//? 19) Use .find() to get the first number greater than 10 from an array.

// const firstAbove10 = ages.find(age => age > 10);

// console.log(firstAbove10);

//? 20) Use .forEach() to print every name from an array of names.
const students = [
  { name: "Ali", marks: 80 },
  { name: "Zara", marks: 95 },
  { name: "Umar", marks: 45 },
];

// students.forEach(objInStudent => {
//     for (const key in objInStudent) {
//       if (key === "name") console.log(`${key} : ${objInStudent[key]}`);
//     }
// })

//? 21) Use .map() to return an array of only student names.

// const studentNames = students.map(obj => obj.name);
// console.log(studentNames);

//? 22) Use .filter() to return students who scored more than 50.
// const scoredAbove50 = students.filter(obj => obj.marks > 50 );

// console.log(scoredAbove50);

//? 23) Use .find() to get the student whose name is "Zara".
// const findZara = students.find(obj => obj.name === "Zara");

// console.log(findZara);

//? 24) Use .forEach() to print each student’s name and marks.
// students.forEach(obj => console.log(obj.name, obj.marks));

//? 25) You have an array [2, 4, 6, 8]. Return a new array with each number squared.
//? → Output: [4, 16, 36, 64]
// const nums = [2, 4, 6, 8];
// const squareNums = nums.map(number => number * number);
// console.log(squareNums);

//? 26) Given: ["Ali", "Zara", "Umar", "Ahmed"]. Display each name one by one.
// ["Ali", "Zara", "Umar", "Ahmed"].map(name => console.log(name));

//? 27) From [12, 25, 17, 20, 16, 30], return only the ages above 18.
// const allAges = [12, 25, 17, 20, 16, 30];
// const above18 = allAges.filter(age => age > 18);

// console.log(above18);

//? 28) Check if "apple" exists in the array ["banana", "mango", "grapes", "apple"].
// const fruits = ["banana", "mango", "grapes", "apple"];
// const checkApple = fruits.find(fruit => fruit === "apple");

// console.log(checkApple);

//? 29) From the following list, find the first student who scored more than 90:
// const studentList = [
//     { name: "Ali", marks: 75 },
//     { name: "Zara", marks: 92 },
//     { name: "Umar", marks: 85 }
// ]

// const scoredAbove90 = studentList.find(obj => obj.marks > 90);

// console.log(scoredAbove90);

//? 30) You have an array [200, 150, 300, 100]. Return the total sum.
//? → Output: 750

// const bigNumbers = [200, 150, 300, 100];
// const totalSum = bigNumbers.reduce((acc,num)=> acc += num);

// console.log(totalSum);

// ? 31) From this array:
const arrOfObj = [
  { id: 1, username: "ali123" },
  { id: 2, username: "zara88" },
  { id: 3, username: "umar_01" },
];

//? Return a new array of only usernames.

// const usernames = arrOfObj.map(obj => obj.username)
// console.log(usernames);

//? 32) From [1, 2, 3, 4, 5, 6], return only odd numbers.
//?  → Output: [1, 3, 5]

// const arrOfNums = [1, 2, 3, 4, 5, 6];

// const oddNums = arrOfNums.filter(num => num % 2 !== 0);

// console.log(oddNums);

//? 33) Count how many vowels are present in the string "javascript".
// const checkVowels = (word) => {
//   let vowels = "aeiou";
//   let count = 0;
//   for (let i = 0; i < word.length; i++) {
//     let char = word[i];
//     if (vowels.includes(char)) count++;
//   }
//   return count;
// };

// console.log(checkVowels("javascript"));

//? 34) Loop through this array and log:
//? Task: [taskName] - Status: [Completed/Incomplete]
// const arrOFTasks = [
//     { task: "Assignment", completed: true },
//     { task: "Homework", completed: false }
// ]

// const printsArray = arrOFTasks.map(obj => {
//         if (obj.completed) {
//             obj.Status = "Completed";
//             // delete obj.completed;
//         } else if (!obj.completed) {
//             obj.Status = "Incompleted";
//             // delete obj.completed;
//         }
//     return `Task: [${obj.task}] - Status [${obj.Status}]`;
// })

// console.log(printsArray);

//? 35) From a list of employees, return a new array that adds a new field: "status": "active" to each object.

// const employees = [
//     { employeeName: "Suraish", employeeAge: 22 },
//     { employeeName: "Ahad", employeeAge: 30 },
//     { employeeName: "Waqar", employeeAge: 40 }
// ]

// const addNewField = employees.map(obj => {
//     obj.Status = "active";
//     return obj;
// })

// console.log(addNewField);
