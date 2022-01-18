
const assert = require('chai').assert;
const tail = require('../tail'); 

// Mocha and Chai test assertions

describe("#tail", () => {
  it("returns 9 for [5, 7, 9]", () => {
    assert.deepEqual(tail([5, 7, 9]), [7, 9])
  });
  it('returns ["Blazers", "Rockets", "Hitmen"] for ["Rebels", "Blazers", "Rockets", "Hitmen"]', () => {
    assert.deepEqual(tail(["Rebels", "Blazers", "Rockets", "Hitmen"]), ["Blazers", "Rockets", "Hitmen"])
  });
  it('returns [] for [3]', () => {
    assert.deepEqual(tail([3]), [])
  });
});




// Old test assertions:

// const oldArray = [5, 7, 9];
// const newArray = tail(oldArray);
// assertEqual(newArray[0], 7);
// assertEqual(newArray[0], 9);

// const oldArray2 = ["Rebels", "Blazers", "Rockets", "Hitmen"];
// const newArray2 = tail(oldArray2);
// assertEqual(newArray2[0], "Blazers");
// assertEqual(newArray2[0], "Rockets");

