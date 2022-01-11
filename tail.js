const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(` 😊  Assertion Passed: ${actual}! === ${expected}! `);
  } else {
    console.log(` 💥  Assertion Failed: ${actual}! !== ${expected}! `);
  }
};

const tail = function(array) {
  // tail function should return a new array with the "tail" of assertEqual
  // An array with only one element should yield an empty array for its tail
  // An empty array should yield an empty array for its tail
  if ((array.length === 0) || (array.length === 1)) {
    return [];
  } else if (array.length > 1) {
    return array.slice(1);
  }
};

const oldArray = [5, 7, 9];
const newArray = tail(oldArray);
assertEqual(newArray[0], 7);
assertEqual(newArray[0], 9);

const oldArray2 = ["Rebels", "Blazers", "Rockets", "Hitmen"];
const newArray2 = tail(oldArray2);
assertEqual(newArray2[0], "Blazers");
assertEqual(newArray2[0], "Rockets");

const oldArray3 = [1];
const newArray3 = tail(oldArray3);
assertEqual(newArray3[0], "Chris rocks");
assertEqual(newArray3[0], []);

const oldArray4 = [];
const newArray4 = tail(oldArray4);
assertEqual(newArray4[0], "Chris rocks");
assertEqual(newArray4[0], []);



