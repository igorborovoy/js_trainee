Number.prototype.add = function () {
  let num = Number(this);
  return ++num;
}

Number.prototype.dec = function () {
  let num = Number(this);
  return --num;
}

//-------------------------//


function sum(a) {
  let currentSum = a;
  let result;
  if (isNaN(a)) {
    return currentSum;
  }

  function f(b) {
    if (b) {
      currentSum += b;
    } else {
      result = currentSum;
    }
    return f;
  }

  f.toString = function () {
    if (currentSum > result) {
      return result;
    } else {
      return currentSum;
    }
  }

  return f;
}

//-------------------//


function objFromstr(str) {
  let arr = str.split('.');
}


//--------------------//

function union(a, b) {
  console.log(Array.from(new Set([...a, ...b])))
}

union([1, 2, 3, 4, 5], [4, 5, 6]);

function intersection(a, b) {
  console.log(a.filter(elem => b.includes(elem)));
}

intersection([1, 2, 3, 4, 5], [4, 5, 6]);

function difference(a, b) {
  console.log(a.filter(elem => !b.includes(elem)));
}

difference([1, 2, 3, 4, 5], [4, 5, 6]);

function repeat(a, count) {
  let b = [];
  for (let i=0; i<count; i++){
    b[i] = [...a];
  }
  console.log(b.flat());
}

repeat([1, 2, 3], 4);

