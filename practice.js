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

var inputStack = []; // First stack
var outputStack = []; // Second stack

// For enqueue, just push the item into the first stack
function enqueue(stackInput, item) {
  return stackInput.push(item);
}

function dequeue(stackInput, stackOutput) {
  // Reverse the stack such that the first element of the output stack is the
  // last element of the input stack. After that, pop the top of the output to
  // get the first element that was ever pushed into the input stack
  if (stackOutput.length <= 0) {
    while (stackInput.length > 0) {
      var elementToOutput = stackInput.pop();
      stackOutput.push(elementToOutput);
    }
  }

  return stackOutput.pop();
}

enqueue(inputStack, 5);
enqueue(inputStack, 6);
enqueue(inputStack, 7);

dequeue(inputStack, outputStack);
dequeue(inputStack, outputStack);

console.log(inputStack);
console.log(outputStack);

// Q7: Make this work

// Problem

// duplicate([1, 2, 3, 4, 5]); // [1,2,3,4,5,1,2,3,4,5]

function duplicateItems(arr) {
  return arr.concat(arr);
}

console.log(duplicateItems([1, 2]));

// Q8: Write a "mul" function which will properly when invoked as below syntax
// Problem
// console.log(mul(2)(3)(4)); // output : 24
// console.log(mul(4)(3)(4)); // output : 48

function mul(x) {
  return function (y) {
    // anonymous function
    return function (z) {
      // anonymous function
      return x * y * z;
    };
  };
}

console.log(mul(4)(3)(4)); // output : 48

// Q9: Write a function that would allow you to do this ?

// var addSix = createBase(6);
// addSix(10); // returns 16
// addSix(21); // returns 27

function createBase(baseNumber) {
  return function (N) {
    // we are referencing baseNumber here even though it was declared
    // outside of this function. Closures allow us to do this in JavaScript
    return baseNumber + N;
  };
}

var addSix = createBase(6);
console.log(addSix(10));
console.log(addSix(21));

// Q10: FizzBuzz Challenge

// Problem
// Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3, "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5.

// Q11: Given two strings, return true if they are anagrams of one another

// Problem
// For example: Mary is an anagram of Army

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

// Q17: How does the this keyword work? Provide some code examples
