// Make sure you try different options and change the variables to ensure properly working code.

// Write a statement that takes a variable of item and logs "in budget" if a price is $100 or less.
let item = 99;
if (item <= 100) {
  console.log("in budget");
} else {
  console.log("not in budget");
}

// Write a statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.
let hungry = false;
if (hungry) {
  console.log("eat food");
} else {
  console.log("keep coding");
}

// Write a statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.
let trafficLight = "yellow";
if (trafficLight === "green") {
  console.log("go");
} else if (trafficLight === "yellow") {
  console.log("slow down");
} else if (trafficLight === "red") {
  console.log("stop");
} else {
  console.log("Error");
}

// Write a statement that takes two variables that are numbers and outputs the larger number. If the numbers are equal, output "the numbers are the same".
let num1 = 45;
let num2 = 69;
if (num1 < num2) {
  console.log(num2);
} else if (num1 > num2) {
  console.log(num1);
} else if (num1 === num2) {
  console.log("the numbers are the same");
}

// Write a statement that takes a variable of a number and logs whether the number is odd, even, or zero.
let num = 345;
if (num % 2 === 0 && num !== 0) {
  console.log("even");
} else if (num % 2 !== 0) {
  console.log("odd");
} else if (num === 0) {
  console.log("zero");
}

// Stretch Goals
// Write a statement that takes a variable of a grade percentage and logs the letter grade for that percentage, if the grade is 100% log "perfect score", if the grade is zero log "no grade available."
let grade = 0.84;
if (grade === 1) {
  console.log("perfect score");
} else if (grade > 0.89 && grade < 1) {
  console.log("A");
} else if (grade > 0.79 && grade < 0.9) {
  console.log("B");
} else if (grade > 0.69 && grade < 0.8) {
  console.log("C");
} else if (grade > 0.59 && grade < 0.7) {
  console.log("D");
} else if (grade > 0.01 && grade < 0.6) {
  console.log("F");
} else if (grade === 0) {
  console.log("no grade available");
}

// Write a statement that takes a variable of a boolean, number, or string data type and logs the data type of the variable. HINT: Check out the JavaScript typeof operator.
let dataType1 = true;
console.log(typeof dataType1);
let dataType2 = 9834;
console.log(typeof dataType2);
let dataType3 = "Hello";
console.log(typeof dataType3);

// Create a password checker using a single conditional statement. If a user inputs a password with 12 or more characters AND the password includes !, then log "That is a mighty strong password!" If the user’s password is 8 or more characters OR includes !, then log "That password is strong enough." Log "That is not a valid password." for every other input.
let password = "asdf!";
if (password.length > 11 && password.includes("!")) {
  console.log("That is a mighty strong password!");
} else if (password.length > 7 || password.includes("!")) {
  console.log("That password is strong enough.");
} else {
  console.log("That is not a valid password.");
}
