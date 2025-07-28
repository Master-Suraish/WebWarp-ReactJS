//^ Assignment 2 : JavaScript Logical Practice Questions (Mixed Topics)

//! ---------------------------------------------------------------------------------------------
//? 1. Unique Words Counter :
//? Input: A string
//? Task: Return an object with each unique word and its count.

const text = "JavaScript is great and JavaScript is powerful";

function uniqueWord(str) {
  const lowerCase_str = str.toLowerCase();
  const splitInWords = lowerCase_str.split(" ");
  let uniqueWordObj = {};
  for (let i = 0; i < splitInWords.length; i++) {
    let word = splitInWords[i];
    if (!uniqueWordObj.hasOwnProperty(word)) {
      uniqueWordObj[word] = 1;
    } else {
      uniqueWordObj[word]++;
    }
  }
  return uniqueWordObj;
}

// console.log(uniqueWord(text));

//! ---------------------------------------------------------------------------------------------
//? 2. Group Students by Class :
//? Input: Array of objects
//? Task: Return an object like { "10th": [...], "9th": [...] }

const allStudents = [
  { name: "Ali", class: "10th" },
  { name: "Sara", class: "9th" },
  { name: "Ahmed", class: "10th" },
  { name: "Zara", class: "9th" },
  { name: "Suraish", class: "11th" },
];

let classObj = {};

for (let obj of allStudents) {
  if (!classObj[obj.class]) {
    classObj[obj.class] = [];
  }
  classObj[obj.class].push(obj.name);
}

// console.log(classObj);

//! ---------------------------------------------------------------------------------------------
//? 3. Filter Products by Price Range
//? Task: Create a function that takes min and max price and returns filtered products

const products = [
  { name: "Laptop", price: 800 },
  { name: "Mouse", price: 20 },
  { name: "Phone", price: 500 },
];

function filterProducts(minBudget, maxBudget) {
  for (let obj of products) {
    if (minBudget <= obj.price && maxBudget >= obj.price) {
      console.log(obj);
    }
  }
}

// filterProducts(10, 500);

//! ---------------------------------------------------------------------------------------------
//? 4. Check Palindrome Using Function
//? Input: A string like "madam"
//? Task: Check if it is palindrome using a function

function checkPalindrome(str) {
  let lowerCase_str = str.toLowerCase();
  let isPalindrome = lowerCase_str.split("").reverse().join("");
  if (isPalindrome == lowerCase_str) {
    return `${lowerCase_str} is Palindrome`;
  } else {
    return `${lowerCase_str} is not Palindrome`;
  }
}

// console.log(checkPalindrome("Madam"));
// console.log(checkPalindrome("hello"));

//! ---------------------------------------------------------------------------------------------
//? 5. Flatten Array
//? Task: Flatten the array to [1, 2, 3, 4, 5] using recursion or array methods

const nestedArray = [1, [2, [3, 4]], 5];

let flattenArray = nestedArray.flat(2);

// console.log(flattenArray);

//! ---------------------------------------------------------------------------------------------
//? 6. Total Salary Calculation (Using Reduce)
//? Task: Get total salary of all employees

const employees = [
  { name: "Ali", salary: 1000 },
  { name: "Zara", salary: 1500 },
  { name: "Ahmed", salary: 1200 },
];

const totalSalary = employees.reduce((acc, obj) => acc + obj.salary, 0);

// console.log(totalSalary);

//! ---------------------------------------------------------------------------------------------
//? 10. Sum of All Even Numbers in Nested Array
//? Task: Return sum of all even numbers, regardless of depth

const data = [1, 2, [4, 5, [6, 8]], 10];

let flattenData = data.flat(2);

const sum = flattenData.reduce((acc, number) => {
  if (number % 2 === 0) acc += number;
  return acc;
}, 0);

// console.log(sum);

//! ---------------------------------------------------------------------------------------------
//? 11. Rest Operator in Function
//? Task: Write a function that takes any number of numbers and returns their average

function average(...numbers) {
  const sumOfAllValues = numbers.reduce((acc, number) => acc + number);
  const average = sumOfAllValues / numbers.length;
  return average;
}
// console.log(average(2, 4, 5, 9));

//! ---------------------------------------------------------------------------------------------
//? 12. Frequency Count with Spread
//? Task: Count how many times each fruit occurred using spread & reduce

const arr = ["apple", "banana", "apple", "orange", "banana", "apple"];

const Frequency = arr.reduce((accObject, fruit) => {
  if (!accObject[fruit]) {
    accObject[fruit] = 0;
  }
  accObject[fruit]++;
  return accObject;
}, {});

// console.log(Frequency);

//! ---------------------------------------------------------------------------------------------
//? 13. Toggle Status
//? Task: Write a function that toggles done status of a task by id

const tasks = [
  { id: 1, name: "Code", done: false },
  { id: 2, name: "Eat", done: true },
];

function toggleDone(id) {
  for (const obj of tasks) {
    if (id === obj.id) {
      obj.done ? (obj.done = false) : (obj.done = true);
      console.log(obj);
    }
  }
}

// toggleDone(1);

//! ---------------------------------------------------------------------------------------------
//? 14. Sort by Name Length
//? Task: Sort names by length in ascending order

const names = ["Suraish", "Ali", "Zara", "Ahmed", "Usman"];

names.sort((a, b) => a.length - b.length);

// console.log(names);

//! ---------------------------------------------------------------------------------------------
//? Assignment 2
//? last date 30 july
