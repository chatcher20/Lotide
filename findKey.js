
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(` 😊  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(` 💥  Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(object, callback) {
  for (let key of Object.keys(object)) { // Use for of loop not for in loop because we want to iterate over the values of the key/value pairs, not the keys
    console.log(Object.keys(object));    // Prints: ["Blue Hill", "Akaleri", "noma", "elBulli", "Ora", "Akelarre"]
    if (callback(object[key]) === true) {
      return key;
    }
    // return undefined
  }
};


const example1 = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

assertEqual(findKey(example1, x => x.stars === 2), "noma");


/*
Both for..in and for..of are looping constructs which are used to iterate over data structures. 
The only difference between them is the entities they iterate over: 
for..in iterates over all enumerable property keys of an object. 
for..of iterates over the values of an iterable object.
*/

