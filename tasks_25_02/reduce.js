//----------sum all--------//

function reduceSum(arr) {
  return arr.reduce((acc, curr) => acc + curr)
}

//----------sum before first zero---------//

function reduceSumBeforeZero(arr) {
  let newArr = [...arr];        //do not change original array

  return newArr.reduce((sum, elem, index) => {
    if (!elem) {
      newArr.length = index;    //delete remaining array elements
      return sum;
    } else {
      return sum + elem;
    }
  }, 0);                        //initial value for array with first zero element
}

//---------count elements for sum > 10--------------//

function reduceSumMore10(arr) {
  let count = 0;
  arr.reduce((acc, elem) => {
    if (acc <= 10) {
      count++;
    }
    return acc + elem;
  }, 0);
  return count;
}
