function deepClone(obj) {
  let result = {};
  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      result[key] = deepClone(obj[key]);
    } else {
      result[key] = obj[key]
    }
  }
  return result;
}

const obj1 = {
  a: 'igor',
  b: 'borovoy',
  c: {
    d: 'old'
  }
}

const obj2 = deepClone(obj1);
console.log(obj1);
obj1.c.d = 'new';
console.log(obj1);
console.log(obj2);