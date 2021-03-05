function myPromiseAll(array) {

  let results = [];
  return new Promise((resolve, reject) => {
    array.forEach((p, index) => {
      p
        .then((result) => {
          results.push(result)
          if (index === array.length - 1) {
            resolve(results);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  })
}

console.log(myPromiseAll([
  new Promise((resolve) => { resolve(1) }),
  new Promise((resolve, reject) => { reject(2) }),
  new Promise((resolve) => { resolve(3) })
]));