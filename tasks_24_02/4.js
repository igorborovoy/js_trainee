let tree = {
  valueNode: 1,
  next: [
    {
      valueNode: 3,
      next: [
        {
          valueNode: 8,
          next: null
        }
      ]
    },
    {
      valueNode: 2,
      next: null
    }
  ]
};

function nodeSum() {
  let count = 0;
  return function sum(obj) {
    for (let prop in obj) {
      if (Array.isArray(obj[prop])) {
        obj[prop].forEach((elem) => sum(elem));
      } else {
        count += obj[prop];
      }
    }
    return count;
  }
}

console.log(nodeSum()(tree));