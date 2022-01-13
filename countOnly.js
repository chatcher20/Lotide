
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(` 😊  Assertion Passed: ${actual}! === ${expected}! `);
  } else {
    console.log(` 💥  Assertion Failed: ${actual}! !== ${expected}! `);
  }
};

// console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
// console.log(assertEqual(1, 1));
// console.log(assertEqual("Rocket", "Rocket"));
// console.log(assertEqual(1, 2));


// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {

  const results = {};

  // loop through array

  for (const item of allItems) {
    
    if (itemsToCount[item]) {    // is true..
      if (results[item]) {      // is true..
        results[item] += 1;
      } else {
        results[item] = 1
      }
    }
  }
  return results;
};


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

