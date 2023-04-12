// Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.
const multBy3 = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] * 3);
  }
  return newArr;
};
const testArr1 = [3, 9, 15, 4, 10];
console.log(multBy3(testArr1));
// output: [9, 27, 45, 12, 30]

// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
const onlyOdd = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};
const testArr2 = [0, 2, -7, 3, 5, 8, 10, 13];
console.log(onlyOdd(testArr2));
// output: [-7, 3, 5, 13]

// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof method.
const onlyLetters = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") {
      newArr.push(arr[i]);
    }
  }
  return newArr.join("");
};
const comboArr = [
  7,
  "n",
  true,
  "i",
  "c",
  10,
  "e",
  -388,
  "w",
  3,
  "o",
  0,
  "r",
  false,
  "k",
];
console.log(onlyLetters(comboArr));
// output: "nicework"

// Create a function that takes in an array of numbers and returns the sum.
const sumThese = (arr) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    count += arr[i];
  }
  return count;
};
const addThese1 = [1, 2, 3, 4];
console.log(sumThese(addThese1));
// output: 10
const addThese2 = [];
console.log(sumThese(addThese2));
// output: 0

// Create a function that takes in an array of numbers and returns the index of the largest number.
const largest = (arr) => {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > num) {
      num = arr[i];
    }
    return arr[i];
  }
};
const indexHighestNumber = [1, 4, 2, 3];
console.log(largest(indexHighestNumber));
// output: 1

// Stretch Goals
// Create a function that takes in two arrays and returns one array with no duplicate values.
const noDupes = (a1, a2) => {
  let a3 = a1.concat(a2);
  let newArr = [];
  for (let i = 0; i < a3.length; i++) {
    if (!newArr.includes(a3[i])) {
      newArr.push(a3[i]);
    }
  }
  return newArr;
};
const arr1 = [3, 7, 10, 5, 4, 3, 3];
const arr2 = [7, 8, 2, 3, 1, 5, 4];
console.log(noDupes(arr1, arr2));
// output: [3, 7, 10, 5, 4, 8, 2, 1]

// Create a function that takes in two numbers as arguments and returns an array the length of the first number filled with the second number.
const repeater = (n1, n2) => {
  let newArr = [];
  for (let i = 0; i < n1; i++) {
    newArr.push(n2);
  }
  return newArr;
};
const arrayLength1 = 6;
const arrayValue1 = 0;
console.log(repeater(arrayLength1, arrayValue1));
// output: [0, 0, 0, 0, 0, 0]
const arrayLength2 = 4;
const arrayValue2 = 11;
console.log(repeater(arrayLength2, arrayValue2));
// output: [11, 11, 11, 11]

// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function.
const addAll = (n) => {
  let start = 0;
  for (let i = 0; i < n + 1; i++) {
    start += i;
  }
  return start;
};
const addUp1 = 4;
console.log(addAll(addUp1));
// 1 + 2 + 3 + 4 = 10
// output: 10
const addUp2 = 10;
console.log(addAll(addUp2));
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55
// output: 55
const addUp3 = 600;
console.log(addAll(addUp3));
// output: 180300
