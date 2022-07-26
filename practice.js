// Q2: Given a string, reverse each word in the sentence
// Problem
// For example Welcome to this Javascript Guide! should be become emocleW ot siht tpircsavaJ !ediuG

function reverseWords(str) {
  let reverseWordsArr = str
    .split(" ")
    .map((word) => word.split("").reverse().join(""));
  return reverseWordsArr.join(" ");
}

console.log(reverseWords("Welcome to this Javascript Guide!"));

// Q3: How to check if an object is an array or not? Provide some code.

var arrayList = [1, 2, 3];
var notAnArray = {
  array: false,
};
console.log(Array.isArray(arrayList));
console.log(Array.isArray(notAnArray));

// Q4: How to empty an array in JavaScript?
// Method 1
var arrayFull = [1, 2, 3];
console.log(arrayFull);
var arrayFull = [];
console.log(arrayFull);

// Method 2
var anotherArrayFull = [1, 2, 3];
console.log(anotherArrayFull);
anotherArrayFull.length = 0;
console.log(anotherArrayFull);

// Q5: How would you check if a number is an integer?
function isInt(num) {
  if (num % 1 === 0) {
    console.log("Integer");
  } else {
    console.log("Not an integer");
  }
}

isInt(5);
isInt(5.5);
