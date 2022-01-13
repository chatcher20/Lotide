const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(` 😊  Assertion Passed: ${actual}! === ${expected}! `);
  } else {
    console.log(` 💥  Assertion Failed: ${actual}! !== ${expected}! `);
  }
};

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



// The function eqObjects should take in two objects and 
// return true or false, based on perfect match
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!


const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length)      // First, use the Object.keys function on both objects and compare their lengths. If not equal, there's no point in going further: return false
    return false;
  for (const key in object1) {
    if (!object2[key])
    return false;
    if (Array.isArray(object1[key])) {
      if (Array.isArray(object2[key])) {
        if (!eqArrays(object1[key], object2[key])) {
          return false
        }
      }
    }
    else {
      if (object1[key] !== object2[key]) {
        return false
      }
    }
  }
return true
};



const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);      // => true


const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);     // => false





