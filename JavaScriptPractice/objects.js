// Consider this variable:

let person = {
  firstName: "Arthur",
  lastName: "Dent",
};

// Write the code that accesses the first name of the person object.
console.log(person.firstName);

// Write the code that accesses the last name of the person object.
console.log(person.lastName);

// Write the code that gives the person object a property of homePlanet and set it to 'Earth'.
person.homePlanet = "Earth";
console.log(person.homePlanet);

// Update the person object with a method that logs "Arthur Dent is from planet Earth".
person.getData = function () {
  return `${this.firstName} ${this.lastName} is from ${this.homePlanet}.`;
};
console.log(person.getData());

// Consider this variable:

const product = {
  name: "chair",
  price: 24.99,
};

// Write a function called describeProduct that takes the product object as an argument and logs "The product is a chair. It costs $24.99".
product.describeProduct = function () {
  return `The product is a ${this.name}. It costs $${this.price}.`;
};
console.log(product.describeProduct());

// Write a function called totalWithTax that takes the product object as an argument and returns the total price of the chair that includes a 7% sales tax rounded to two decimals.
product.totalWithTax = function () {
  return (this.price * 1.07).toFixed(2);
};
console.log(product.totalWithTax());

// Consider this variable:

let lunch = {
  name: "PB and Banana",
  type: "sandwich",
  ingredients: ["bread", "peanut butter", "banana"],
};

// Write the code that accesses the ingredients property.
console.log(lunch.ingredients);

// Write the code that access the third ingredient of the lunch object.
console.log(lunch.ingredients[2]);

// Write a function that takes the lunch object as an argument and returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
lunch.howTo = function () {
  return `The ingredients for a ${this.name} ${this.type} are ${this.ingredients[0]}, ${this.ingredients[1]}, and ${this.ingredients[2]}.`;
};
console.log(lunch.howTo());

// Update the lunch object with method that returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
lunch = {
  name: "PB and Banana",
  type: "sandwich",
  ingredients: ["bread", "peanut butter", "banana"],
  getData: function () {
    return `The ingredients for a ${this.name} ${this.type} are ${this.ingredients[0]}, ${this.ingredients[1]}, and ${this.ingredients[2]}.`;
  },
};
console.log(lunch.getData());

// Consider this variable:

const animals = [
  { name: "Waffles", type: "dog", age: 7 },
  { name: "Fluffy", type: "cat", age: 14 },
  { name: "Spelunky", type: "dog", age: 4 },
  { name: "Hank", type: "cat", age: 11 },
];

// Create a function that takes in an array of animal objects and returns a new array with only the objects that are cats.
animals.cats = function () {
  return animals.filter((val) => val.type === "cat");
};
console.log(animals.cats());

// Create a function that takes in an array of animal objects and returns a new array with only the names of the animals.
animals.onlyNames = function () {
  return animals.map((val) => val.name);
};
console.log(animals.onlyNames());

// Create a function that takes in an array of animal objects and returns a new array of the names of the animals that are more than 10 years old.
animals.moreThan10 = function () {
  return animals.filter((val) => val.age > 10).map((val) => val.name);
};
console.log(animals.moreThan10());

// Create a function that takes in an array of animal objects and returns a new array with a sentence about each animal.
animals.description = function () {
  return animals.map(
    (val) => `${val.name} is a ${val.age} year old ${val.type}.`
  );
};
console.log(animals.description());

// Consider this variable:

const author = {
  name: "H. G. Wells",
  genre: "science fiction",
};

// Write the code that destructures the author object so that the following code snippet will run successfully:
const { name, genre } = author;

console.log(`${name} is a ${genre} author`);
// output: "H. G. Wells is a science fiction author"

// Consider this variable:

const pokeOne = {
  species: "Charmander",
  pokemon_type: "Fire",
};

const pokeTwo = {
  species: "Magikarp",
  pokemon_type: "Water",
};

// Create a function called describePokemon that take an object like the ones above and uses destructuring to return a description of the Pokemon so that the following code snippet will run successfully:
const describePokemon = (obj) => {
  return `${obj.species} is a ${obj.pokemon_type} pokemon`;
};

console.log(describePokemon(pokeOne));
// output: "Charmander is a Fire pokemon"
console.log(describePokemon(pokeTwo));
// output: "Magikarp is a Water pokemon"

// Consider this variable:

const triangleDimensions = {
  base: 2,
  height: 5,
};

// Modify the triangleDimensions object to have a method that returns the area of the triangle.
triangleDimensions.area = function () {
  return this.base * this.height * 0.5;
};
console.log(triangleDimensions.area());

// Write the code that will update the base to be the value of 6.
triangleDimensions.base = 6;
console.log(triangleDimensions.area());

// Stretch Goals

// Consider this variable:

const learn = {
  cohorts: {
    2021: ["Alpha", "Bravo", "Charlie", "Delta", "Echo"],
    2022: ["Alpha", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot", "Golf"],
  },
};

// Write the code that logs the name of your cohort.
console.log(learn.cohorts[2022][6]);

// Write the code that uses destructuring to log the name of your cohort.
const { cohorts } = learn;
console.log(cohorts[2022][6]);
