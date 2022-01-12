








const eqArrays = function(arr1, arr2) {

  // first, if the length of the arrays are not the same, return false
  // second, need to iterate through element in array 1 and compare to each element in array 2
  // if each element is the same in both arrays, return true

  if (arr1.length !== arr2.length) {
    return false
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false
    }
  }

  return true
};


console.log(eqArrays([1, 2, 3], [1, 2, 3]), true);


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(` 😊  Assertion Passed: ${actual}! === ${expected}! `);
  } else {
    console.log(` 💥  Assertion Failed: ${actual}! !== ${expected}! `);
  }
};

console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)); // => should PASS



/*

console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
console.log(assertEqual(1, 1));
console.log(assertEqual("Rocket", "Rocket"));
console.log(assertEqual(1, 2));

*/