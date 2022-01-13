const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(` 😊  Assertion Passed: ${actual}! === ${expected}! `);
  } else {
    console.log(` 💥  Assertion Failed: ${actual}! !== ${expected}! `);
  }
};

/*
console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
console.log(assertEqual(1, 1));
console.log(assertEqual("Rocket", "Rocket"));
console.log(assertEqual(1, 2));
*/



// Use object.keys() to find the keys of an object. In this case, find the keys of the object "bestTVShowByGenre"
// Use a for...of loop to loop over the keys returend y object.keys

const findKeyByValue = function(object, value) {

  let keyArr = Object.keys(object);

  for (const key of keyArr) {  //  for (i = 0; i < object.length; i++) {}

    if (object[key] === value) {
      return key;
    }
  }
  return undefined;
};

// Test assertions:

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");

/*
Output:
 😊  Assertion Passed: drama! === drama! 
 😊  Assertion Passed: undefined! === undefined! 
 💥  Assertion Failed: sci_fi! !== undefined! 
 😊  Assertion Passed: sci_fi! === sci_fi! 
 */

