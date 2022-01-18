const assertEqual = require('../assertEqual'); //two dots for going up one folder
const eqArrays = require('../eqArrays');

// Test assertions:

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS