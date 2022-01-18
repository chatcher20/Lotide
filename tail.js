const assertEqual = require('./assertEqual');  // one dot for same folder

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

module.exports = tail;



