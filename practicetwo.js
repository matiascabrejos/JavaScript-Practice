// Q10: FizzBuzz Challenge

// Problem
// Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3, "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5.

for (let i = 1; i <= 100; i++) {
  let f = i % 3 == 0,
    b = i % 5 == 0;
  console.log(f ? (b ? "FizzBuzz" : "Fizz") : b ? "Buzz" : i);
}

// Q11: Given two strings, return true if they are anagrams of one another

// Problem
// For example: Mary is an anagram of Army

var firstWord = "Mary";
var secondWord = "Army";

function isAnagram(first, second) {
  // For case insensitivity, change both words to lowercase.
  var a = first.toLowerCase();
  var b = second.toLowerCase();

  // Sort the strings, and join the resulting array to a string. Compare the results
  a = a.split("").sort().join("");
  b = b.split("").sort().join("");

  return a === b;
}

console.log(isAnagram(firstWord, secondWord)); // true
// Q12: How would you use a closure to create a private counter ?

// Answer
// You can create a function within an outer function (a closure) that allows you to update a private variable but the variable wouldn't be accessible from outside the function without the use of a helper function.

// Q13: Provide some examples of non-bulean value coercion to a boolean one

// Q14: What will be the output of the following code ?

// Problem

//   var y = 1;
// if (function f() {}) {
//   y += typeof f;
// }
// console.log(y);

// Q15: What will the following code output ?

// Problem
// (function() {
//   var a = b = 5;
// })();

// console.log(b);

// Q16: Write a function that would allow you to do this

// Problem
// multiply(5)(6);

function multiply(a) {
  return function (b) {
    return a * b;
  };
}

console.log(multiply(5)(6));

// Q17: How does the this keyword work? Provide some code examples
