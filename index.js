//. Extract the last four characters from the string below;"extravaganza"

const word = "extravaganza";
const lastFour = word.slice(-4);
console.log(lastFour);

// Insert the following string at the fourth index of the below variable:"eat"const food = "The quick fox jumped over the lazy dog"

const food = "The quick fox jumped over the lazy dog";
const newFood = food.slice(0, 4) + "eat " + food.slice(4);
console.log(newFood);

//Count how many times the following string appears in the string variable:1. "the"2."brown"const story= "The quick brown fox jumps over the lazy dog"

const story = "The quick brown fox jumps over the lazy dog".toLowerCase();

const countOccurrences = (str, word) => str.split(word).length - 1;

const countThe = countOccurrences(story, "the");
const countBrown = countOccurrences(story, "brown");

console.log(`"the" appears: ${countThe} times`);
console.log(`"brown" appears: ${countBrown} times`);

///Using JavaScript, find the following words from the following strings:1. "are"const string1 = "The pupils are reading in the library";2. "sitting"const string2 = "The child was sitting on the table before it fell"

const string1 = "The pupils are reading in the library";
const string2 = "The child was sitting on the table before it fell";

console.log(string1.includes("are"));
console.log(string2.includes("sitting"));

// Convert the following strings into the specified format:1. UpperCase: "wonderful"2. LowerCase: "amazing", "UndERneath"3. Title case "A wonderful world"

//1. UpperCase: "wonderful"
const upperCaseWord = "wonderful".toUpperCase();
console.log(upperCaseWord);
// 2.LowerCase: "amazing", "UndERneath"
const lowerCaseWords = ["amazing", "UndERneath"].map((word) =>
  word.toLowerCase()
);
console.log(lowerCaseWords);
//3. Title case "A wonderful world"
const titleCase = "A wonderful world"
  .split(" ")
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
  .join(" ");
console.log(titleCase);