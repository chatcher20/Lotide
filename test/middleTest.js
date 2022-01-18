const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

// Test assertions:

middle([1, 2])            // => []
middle([1, 2, 3])         // => [2]
middle([1, 2, 3, 4])      // => [2, 3]




