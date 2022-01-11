const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(` 😊  Assertion Passed: ${actual}! === ${expected}! `);
  } else {
    console.log(` 💥  Assertion Failed: ${actual}! !== ${expected}! `);
  }
};

const head = function(arr) {
  // if array is empty return indefined
  // if array is not empty, return the first element (not in an array)
  if(arr.length === 0) {
    return undefined
  } else {
    return arr[0]
  }
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([5,6,7]), 20);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Goodbye");
assertEqual(head([]), 5); //array with no elements should return undefined
assertEqual(head([5]), 5); //array with just one element should return that element









