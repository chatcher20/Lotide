
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





const without = function(arrayToInspect, valuesToExclude) {
  let newArray =[];
  for (let i = 0; i < arrayToInspect.length; i++) {
    if (arrayToInspect[i] !== valuesToExclude[i]) {
      newArray.push(arrayToInspect[i])
      }
    }
    console.log(newArray);
  };
  

without([1, 2, 3], [1])     // => [2, 3]
without(["1", 2], [1, 2]) // => ["1"]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]


const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); 
  // no need to capture return value for this test case
  // Make sure the original array was not altered by the without function

assertArraysEqual(words, ["hello", "world", "lighthouse"]);

