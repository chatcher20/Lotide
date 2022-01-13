
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

// assertArraysEqual([1, 2, 3], [1, 2, 3]);   // Returns: 😊  Assertion Passed: 1,2,3! === 1,2,3!
// assertArraysEqual(['1', 2, 3], [1, 2, 3]);   // Returns: 💥  Assertion Failed: 1,2,3! !== 1,2,3!







const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here

  for (let i in sentence) {
    if (sentence[i] !== " ") {
      if (!results.hasOwnProperty(sentence[i])) {
        results[sentence[i]] = [];
      }
      results[sentence[i]].push(i);
    }
  }
  return results;
};
console.log(letterPositions("hello"));

/*

const letterPositions = function(stringToCount) {
  let countedString = {};
  for (const index in stringToCount) {
    if (stringToCount[index] !== ' ') {
      if (!countedString.hasOwnProperty(stringToCount[index])) {
        countedString[stringToCount[index]] = [];
      }
      countedString[stringToCount[index]].push(index);
    }
  }
  return countedString;
};



*/