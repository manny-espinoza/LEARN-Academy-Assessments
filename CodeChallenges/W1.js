// ASSESSMENT 1: Coding Practical Questions
// To run file: navigate to the correct directory in terminal, $ node code-challenges.js
// Describing your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Describe your process:
// Create function that takes two string parameters.
// Within function, create if statement that checks which of the string parameters has greater length. Return whichever string it is.
// console.log() the function with given variable parameters and check results.

const longerWord = (str1, str2) => {
  if (str1.length > str2.length) {
    return str1;
  } else {
    return str2;
  }
};

// Set one:
const fruit1 = "apple";
const fruit2 = "banana";
console.log(longerWord(fruit1, fruit2)); // Output: "banana"
// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry";
const fruit4 = "kiwi";
console.log(longerWord(fruit3, fruit4)); // Output: "cherry"
// Expected outcome: "cherry"

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Describe your process:
// Create a function that takes in a number parameter.
// Within function, create if statement that checks whether the number is less than, equal to, or greater than 212. Returns vary upon results.
// console.log() the function with given variable parameters and check results.

const boilingPoint = (num) => {
  if (num < 212) {
    return `${num} is below boiling point`;
  } else if (num > 212) {
    return `${num} is above boiling point`;
  } else if (num === 212) {
    return `${num} is at boiling point`;
  } else {
    return "Error";
  }
};

const temp1 = 42;
console.log(boilingPoint(temp1)); // Output: "42 is below boiling point"
// Expected output: "42 is below boiling point"

const temp2 = 350;
console.log(boilingPoint(temp2)); // Output: "350 is above boiling point"
// Expected output: "350 is above boiling point"

const temp3 = 212;
console.log(boilingPoint(temp3)); // Output: "212 is at boiling point"
// Expected output: "212 is at boiling point"

// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Describe your process:
// Create a new variable beneath existing ones that combines the existing variables using the .concat() method.
// console.log() the .length of new variable.

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4];
const padres1998WorldSeriesRuns = [6, 3, 5, 3];
const combo = padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns);
console.log(combo.length); // Output: 9
// Expected output: 9

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Describe your process:
// Create a new variable beneath existing one that manipulates currentCohort by chaining multiple methods afterwards.
// console.log() new variable.

const currentCohort = "Golf 2022";
let reverse = currentCohort.split("").reverse().join("");
console.log(reverse); // Output: "2202 floG"
// Expected output: "2202 floG"

// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Describe your process:
// console.log() the array with the .lastIndexOf() method chained behind it. Provide values as per the existing variables.

const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10];
const givenValue1 = 42;
console.log(myNumbers.lastIndexOf(givenValue1)); // Output: "7"
// Expected output: 7

const givenValue2 = 10;
console.log(myNumbers.lastIndexOf(givenValue2)); // Output: "8"
// Expected output: 8

// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Describe your process:
// Create new variables beneath existing ones that are equal to the arrays chained with the .sort() method. Sort ((a, b) => b - a)

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76];
let temps1 = sanDiegoSummerTemperatures.sort((a, b) => b - a);
console.log(temps1);
// Expected output: [82, 80, 79, 77, 76, 73, 72]

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66];
let temps2 = sanDiegoWinterTemperatures.sort((a, b) => b - a);
console.log(temps2);
// Expected output: [68, 67, 66, 66, 62, 59, 59]
