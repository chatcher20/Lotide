const assertArraysEqual = require('../assertArraysEqual');


// Test assertions:


assertArraysEqual([1, 2, 3], [1, 2, 3]);   // Returns: 😊  Assertion Passed: 1,2,3! === 1,2,3!
assertArraysEqual(['1', 2, 3], [1, 2, 3]);   // Returns: 💥  Assertion Failed: 1,2,3! !== 1,2,3!