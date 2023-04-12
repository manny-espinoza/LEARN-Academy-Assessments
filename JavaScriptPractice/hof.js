// Write a function that takes in an array of numbers and returns a new array with all numbers multiplied by 10.
const multBy10 = (arr) => {
  return arr.map((val) => val * 10);
};
const arr1 = [3, 9, 15, 4, 10];
console.log(multBy10(arr1));
// output: [30, 90, 150, 40, 100]

// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
const onlyOdd = (arr) => {
  return arr.filter((val) => val % 2 !== 0);
};
const arr2 = [2, 7, 3, 5, 8, 10, 13];
console.log(onlyOdd(arr2));
// output: [7, 3, 5, 13]

// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use the typeof operator.
const onlyLetters = (arr) => {
  return arr.filter((val) => typeof val === "string").join("");
};
const comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"];
console.log(onlyLetters(comboArr));
// output: "nicework"

// Create a function that takes in an array and returns an array without any false, null, 0, or blank values.
const dataTypes = (arr) => {
  return arr.filter(
    (val) => val !== false && val !== null && val !== 0 && val !== ""
  );
};
const filterArrayValues = [58, "", "abcd", true, null, false, 0];
console.log(dataTypes(filterArrayValues));
// output: [58, "abcd", true]

// Stretch Goals

// Create a function that takes in a string and returns a new string with all the vowels removed.
const noVowels = (str) => {
  let newArr = str.split("");
  return newArr
    .filter(
      (val) =>
        val !== "a" && val !== "e" && val !== "i" && val !== "o" && val !== "u"
    )
    .join("");
};
const str = "javascript is awesome";
console.log(noVowels(str));
// output: "jvscrpt s wsm"

// Create a function that takes in two arrays as arguments returns one array with no duplicate values.
const noDupes = (a1, a2) => {
  let a3 = a1.concat(a2);
  return a3.filter((val, index) => a3.indexOf(val) === index);
};
const arr3 = [3, 7, 10, 5, 4, 3];
const arr4 = [7, 8, 2, 1, 5, 4];
console.log(noDupes(arr3, arr4));
// output: [3, 7, 10, 5, 4, 8, 2, 1]
