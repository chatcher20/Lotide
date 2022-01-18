
// FUNCTION IMPLEMENTATION


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(` 😊  Assertion Passed: ${actual}! === ${expected}! `);
  } else {
    console.log(` 💥  Assertion Failed: ${actual}! !== ${expected}! `);
  }
};
// Export the function
module.exports = assertEqual;

// Notice how we are passing the variable assertEqual (which points to our function) and not calling assertEqual via assertEqual() here. This is an important distinction.















// Template Literals example
/*
const name = 'Alice';
console.log(`Hello, ${name}!`); // logs: Hello, Alice!
*/





/*
Make the function compare the two values it takes in and print out a message telling us if they match or not.

If the values match, it should print (console.log) the following: Assertion Passed: [actual] === [expected] (but with the values filled in)
Otherwise it should print (console.log) the following: Assertion Failed: [actual] !== [expected] (but with the values filled in)
Some examples:

Assertion Failed: Lighthouse Labs !== Bootcamp
Assertion Passed: 1 === 1
Write out a few calls to it and confirm that it is indeed working as expected.

Test at least the following scenarios:

Comparing identical strings
Comparing non-identical strings
Comparing identical numbers
Comparing non-identical numbers
*/