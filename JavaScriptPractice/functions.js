// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt. Each solution requires pseudocode. Test your functions with multiple function calls.

// Write a function named marco that returns "polo".
const marco = () => {
  return "polo";
};
console.log(marco());

// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"
const greeting = (name) => {
  return `Welcome, ${name}!`;
};
console.log(greeting("Manny"));

// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.
const oddOrEven = (n) => {
  if (n % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
};
console.log(oddOrEven(123));

// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.
const triple = (n) => {
  return n * 3;
};
console.log(triple(45));

// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.
const multiply = (n1, n2) => {
  return n1 * n2;
};
console.log(multiply(3, 5));

// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
const divisibleBy = (n1, n2) => {
  if (n1 % n2 === 0) {
    return `${n1} is evenly divisible by ${n2}`;
  } else {
    return `${n1} is not evenly divisible by ${n2}`;
  }
};
console.log(divisibleBy(8, 4));

// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.
const assignGrade = (n) => {
  if (n < 101 && n > 89) {
    return "A";
  } else if (n < 90 && n > 79) {
    return "B";
  } else if (n < 80 && n > 69) {
    return "C";
  } else if (n < 70 && n > 59) {
    return "D";
  } else if (n < 60 && n > -1) {
    return "F";
  }
};
console.log(assignGrade(85));

// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.
const isLonger = (str1, str2) => {
  if (str1.length > str2.length) {
    return str1;
  } else {
    return str2;
  }
};
console.log(isLonger("Somebody once told me", "the world was gonna roll me"));

// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.
const greaterNum = (n1, n2) => {
  if (n1 > n2) {
    return n1;
  } else {
    return n2;
  }
};
console.log(greaterNum(123, 456));

// Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.
const yelling = (str) => {
  return str.toUpperCase();
};
console.log(yelling("What's up!"));
