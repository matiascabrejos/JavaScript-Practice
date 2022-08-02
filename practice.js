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

// Q6: Implement enqueue and dequeue using only two stacks

// Q7: Make this work

// Problem

// duplicate([1, 2, 3, 4, 5]); // [1,2,3,4,5,1,2,3,4,5]

// Q8: Write a "mul" function which will properly when invoked as below syntax
// Problem
// console.log(mul(2)(3)(4)); // output : 24
// console.log(mul(4)(3)(4)); // output : 48

// Q9: Write a function that would allow you to do this ?

// var addSix = createBase(6);
// addSix(10); // returns 16
// addSix(21); // returns 27

// Q10: FizzBuzz Challenge

// Problem
// Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3, "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5.

// Q11: Given two strings, return true if they are anagrams of one another

// Problem
// For example: Mary is an anagram of Army

// Q12: How would you use a closure to create a private counter ?

// Answer
// You can create a function within an outer function (a closure) that allows you to update a private variable but the variable wouldn't be accessible from outside the function without the use of a helper function.
