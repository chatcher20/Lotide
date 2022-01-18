
const assert = require('chai').assert;
const middle = require('../middle');

// Mocha and Chai test assertions

describe("#middle", () => {
  it('returns [] for [1, 2]', () => {
    assert.deepEqual(middle([1, 2]), [])
  });
  it('returns [2] for [1, 2, 3]', () => {
    assert.deepEqual(middle([1, 2, 3]), [2])
  });
  it('returns [2, 3] for [1, 2, 3, 4]', () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3])
  });
});


// Old test assertions:

// middle([1, 2])            // => []
// middle([1, 2, 3])         // => [2]
// middle([1, 2, 3, 4])      // => [2, 3]





// const assert = require('chai').assert;
// const middle = require('../middle');


// describe('Tests for middle()', () => {
  
//   it('returns ["Bobby"] for ["Bill", "Bobby", "Bognar"]'
//     , () => {
//       assert.deepEqual(
//         middle(["Bill", "Bobby", "Bognar"])
//         , ["Bobby"]
//       );
//     }
//   );

//   it('returns [3, 4] for [1, 2, 3, 4, 5, 6]'
//     , () => {
//       assert.deepEqual(
//         middle([1, 2, 3, 4, 5, 6])
//         , [3, 4]
//       );
//     }
//   );

//   /* it(''
//     , () => {
//     }
//   ); */

// });



