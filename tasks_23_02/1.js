Number.prototype.add = function () {
  return this + 1;
}

Number.prototype.dec = function () {
  return this - 1;
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
  console.log(arr);
  let result = arr.reduceRight((prev, curr) => Object.assign({}, [curr, prev]), null);

  console.log(result);

}

objFromstr('a.b.c.d');

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
  console.log(Array.from({ length: count }, item => a.flat()));
}

repeat([1, 2, 3], 2);

