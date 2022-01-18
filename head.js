const assertEqual = require('./assertEqual');

const head = function(arr) {
  // if array is empty return indefined
  // if array is not empty, return the first element (not in an array)
  if(arr.length === 0) {
    return undefined
  } else {
    return arr[0]
  }
};

module.exports = head;


