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
// console.log(eqArrays([1, 2, 3], [1, 2, 3]), true);

const assertArraysEqual = function(arr1, arr2) {
  let result = eqArrays(arr1, arr2);
  if (result) { // if result is true aka if arr1 is equal to arr2 which is calculated in the eqArray function above
    console.log(` 😊  Assertion Passed: ${arr1}! === ${arr2}! `);
  } else {
    console.log(` 💥  Assertion Failed: ${arr1}! !== ${arr2}! `);
  }
};
// Now call the assertArraysEqual function
assertArraysEqual([1, 2, 3], [1, 2, 3]);   // Returns: 😊  Assertion Passed: 1,2,3! === 1,2,3!
assertArraysEqual(['1', 2, 3], [1, 2, 3]);   // Returns: 💥  Assertion Failed: 1,2,3! !== 1,2,3!







const takeUntil = function(array, callback) {
  const newArray =[];
  for (let i of array) {
    if (callback(i) === true) {
      return newArray;
    }
    newArray.push(i);
  }
  return newArray
};




const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

const data3 = [1, 2, 4, 8, 16, -1, -2, -3, -4];
const results3 = takeUntil(data3, x => x < 0);
console.log(results3);
