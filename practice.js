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
