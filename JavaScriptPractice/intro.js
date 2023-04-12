// Write the code that will log the outcome of 34 added to 71.
console.log(34 + 71); // 105

// Write the code that will log the outcome of 67 subtracted from 123.
console.log(67 - 123); // -56

// Write the code that will log the outcome of 56 multiplied by 23.
console.log(56 * 23); // 1288

// Write the code that will log the outcome of 45 divided by 5.
console.log(45 / 5); // 9

// Write the code that will log the outcome of 5 to the power of 7.
console.log(5 ** 7); // 78125

// Write the code that will log the whole number remainder of 33 divided by 6.
console.log(33 % 6); // 3

// Write the code that will log the length of a string containing your name.
console.log("Manny".length); // 5

// Write the code that will log whether your string includes the letter "e"?
console.log("Manny".includes("e")); // false

// Write the code that will log the character at the first index of the string.
console.log("Manny"[0]); // M

// Write the code that will log the string in all uppercase letters.
console.log("Manny".toUpperCase()); // MANNY

// Write the code that will log true or false for the following:

// Is 34 divided by 3 greater than 67 divided by 2?
console.log(34 / 3 > 67 / 2); // false

// Does 5 evaluate to the same as "5"?
console.log(5 == "5"); // true

// Does 5 strictly equal "5"?
console.log(5 === "5"); // false; different data types (number vs. string)

// Does !3 strictly equal 3?
console.log(!3 === 3); // false

// Does "LEARN".length strictly equal 5 AND "Student".length strictly equal 7?
console.log("LEARN".length === 5 && "Student".length === 7); // true

// Does "LEARN".length strictly equal 5 OR "Student".length strictly equal 10?
console.log("LEARN".length === 5 || "Student".length === 10); // true

// Does "LEARN" contain the subset "RN"?
console.log("LEARN".includes("RN")); // true

// Does "LEARN" contain the subset "rn"?
console.log("LEARN".includes("rn")); // false

// Does "LEARN"[0] strictly equal "l"?
console.log("LEARN"[0] === "1"); // false

// Modify the code from the previous question to return true.
// Consider the variables:

var theQuestion = "life, the universe, and everything";
var theAnswer = 42;

// Write the code that will log theAnswer divided by 2.
console.log(theAnswer / 2); // 21

// Write the code that will log the length of theQuestion.
console.log(theQuestion.length); // 34

// Write the code that will log the index of the character "f" in the theQuestion.
console.log(theQuestion.indexOf("f")); // 2

// Write the code that will log the concatenation of the two variables.
console.log(theQuestion + theAnswer); // life, the universe, and everything42

// Write the code that will log "the universe".
console.log(theQuestion.slice(6, 18)); // the universe

// Write the code that will log the character "l" from theQuestion.
console.log(theQuestion[0]); // l

// Write the code that will log whether theQuestion.length is greater than theAnswer.
console.log(theQuestion.length > theAnswer); // false
