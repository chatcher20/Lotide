

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

module.exports = middle;