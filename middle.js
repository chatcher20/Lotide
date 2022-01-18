

const middle = function(array) {
  const newArr = [];
  if (array.length <= 2) {
    return newArr;
  }
  let x = array.length;
  let y = (x-1) / 2;
  if (x % 2 === 1) {
      let oddAnswer = array.slice(y, y + 1);     
      newArr = oddAnswer;                                 
    }
  if (x % 2 === 0) {
    let evenAnswer = array.slice(y, y + 2);
    newArr = evenAnswer;
  }
  return newArr;                   
};

module.exports = middle;

