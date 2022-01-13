
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



// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(object1, object2) {
  // Implement me!
  const inspect = require('util').inspect;
  return eqObjects(object1, object2)
  ? console.log(` 😊  Assertion Passed: ${inspect(object1)}! === ${inspect(object2)}! `)
  : console.log(` 💥  Assertion Failed: ${inspect(object1)}! !== ${inspect(object2)}! `);
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc);

const john = { c: "2", d: ["2", 3] };
const bob = { d: ["2", 3], c: "1" };
assertObjectsEqual(john, bob);



