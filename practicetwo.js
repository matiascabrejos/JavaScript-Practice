// PART 2 OF PRACTICE => FROM Q10 TO THE END(LAST Q)

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

function counter() {
  var _counter = 0;
  // return an object with several functions that allow you
  // to modify the private _counter variable
  return {
    add: function (increment) {
      _counter += increment;
    },
    retrieve: function () {
      return "The counter is currently at: " + _counter;
    },
  };
}

// error if we try to access the private variable like below
// _counter;

// usage of our counter function
var c = counter();
c.add(5);
c.add(9);

// now we can access the private variable in the following way
c.retrieve(); // => The counter is currently at: 14

// Q13: Provide some examples of non-bulean value coercion to a boolean one

// The question is when a non-boolean value is coerced to a boolean, does it become true or false, respectively?

// The specific list of "falsy" values in JavaScript is as follows:

// "" (empty string)
// 0, -0, NaN (invalid number)
// null, undefined
// false
// Any value that's not on this "falsy" list is "truthy." Here are some examples of those:

// "hello"
// 42
// true
// [ ], [ 1, "2", 3 ] (arrays)
// { }, { a: 42 } (objects)
// function foo() { .. } (functions)

// Q14: What will be the output of the following code ?

// Problem

//   var y = 1;
// if (function f() {}) {
//   y += typeof f;
// }
// console.log(y);

// Above code would give output 1undefined. If condition statement evaluate using eval so eval(function f() {}) which return function f() {} which is true so inside if statement code execute. typeof f return undefined because if statement code execute at run time, so statement inside if condition evaluated at run time.

// Q15: What will the following code output ?

// Problem
// (function() {
//   var a = b = 5;
// })();

// console.log(b);

// The code above will output 5 even though it seems as if the variable was declared within a function and can't be accessed outside of it.

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

// https://www.freecodecamp.org/news/javascript-this-keyword-binding-rules/

// To summarize,

// In the case of implicit binding, this binds to the object adjacent to the dot(.) operator while invoking the method.
// In the case of explicit binding, we can call a function with an object when the function is outside of the execution context of the object. The methods call(), apply(), and bind() play a big role here.
// When a function is invoked with the new keyword, the this keyword inside the function binds to the new object being constructed.
// When the this keyword is not resolved with any of the bindings, implicit, explicit or new, then this is bound to the window(global) object. In JavaScript's strict mode, this will be undefined.
// In HTML event handlers, this binds to the HTML elements that receive the event.

// Q18: How would you create a private variable in JavaScript?

// https://css-tricks.com/implementing-private-variables-in-javascript/

// constructor() {
//   this._milesDriven = 0;
//   this._speed = 0;
// }



// Q19: What is Closure in JavaScript? Provide an example

// https://www.javascripttutorial.net/javascript-closure/

function greeting() {
    let message = 'Hi';

    function sayHi() {
        console.log(message);
    }

    return sayHi;
}
let hi = greeting();
hi(); // still can access the message variable





