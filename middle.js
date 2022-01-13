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



const middle = function(array) {
  const newArr = [];
  if (array.length > 2) {
    x = array.length;
    y = (x-1) / 2;
    if (x % 2 === 1) {
      console.log(array.slice(y, y + 1));     //ODD number of elements
      return                                  //return stops the remainder of code from executing if ODD scenario is satisfied
    } else {
      console.log(array.slice(y, y + 2));     //EVEN number of elements
      return                                  //return stops the remainder of code from executing if EVEN scenario is satisfied
    }
  }
  console.log(newArr);                        //if array.length is NOT > 2, newArr is printed
};



middle([1, 2]) // => []
middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4]) // => [2, 3]

/*


// First, if the array is 1 or 2 elements long, return empty array
// Second, if array is 3 or more, and odd number of elements long,
// subtract 1 from the length, divide that number by 2, and 


> array = [1, 2, 3, 4, 5, 6, 7]
[
  1, 2, 3, 4,
  5, 6, 7
]
> x = array.length
7
> y = (x-1)/2
3
> array.slice(y, y)
[]
> array.slice(y, y+1)
[ 4 ]
> array.slice(y-1, y)
[ 3 ]
> array.slice(y-1, y+1)
[ 3, 4 ]


if middle.length is greater than 2 AND % 2 = 1, ODD
% 2 = 0 EVEN

ODD => slice(y-1, y)
EVEN => slice(y-1, y+1)

*/