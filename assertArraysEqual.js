const eqArrays = require('./eqArrays');


const assertArraysEqual = function(arr1, arr2) {
  let result = eqArrays(arr1, arr2);
  if (result) { // if result is true aka if arr1 is equal to arr2 which is calculated in the eqArray function above
    console.log(` 😊  Assertion Passed: ${arr1}! === ${arr2}! `);
  } else {
    console.log(` 💥  Assertion Failed: ${arr1}! !== ${arr2}! `);
  }
};

module.exports = assertArraysEqual;







