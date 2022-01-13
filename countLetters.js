

/*
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(` 😊  Assertion Passed: ${actual}! === ${expected}! `);
  } else {
    console.log(` 💥  Assertion Failed: ${actual}! !== ${expected}! `);
  }
};

console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
console.log(assertEqual(1, 1));
console.log(assertEqual("Rocket", "Rocket"));
console.log(assertEqual(1, 2));
*/

const countLetters = function(string) {
  let countStr = {};
  for (let i of string) {
    if (i !== "") {
      if (!countStr.hasOwnProperty(i))
      countStr[i] = 0;
      countStr[i] += 1;
    }
  }
  return countStr;
};


/*
const countLetters = function(stringToCount) {
  let countedString = {};
  for (const char of stringToCount) {
    if (char !== ' ') {
      if (!countedString.hasOwnProperty(char)) countedString[char] = 0;
      countedString[char]++;
    }
  }
  return countedString;
};
*/


console.log(countLetters("lighthouse in the house"));


/*

Expected Output:

{
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
}

*/


