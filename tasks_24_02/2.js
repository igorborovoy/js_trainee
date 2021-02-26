Function.prototype.myBind = function (context, ...args) {
  let callback = this;
  return function () {
    return callback.call(context, ...args);
  }
}

const a = {
  name: 'igor',
  showName: function () {
    console.log(this.name);
  }
}

const b = {
  name: 'another'
}



function myObjectCreate1(proto) {
  let obj = {};
  Object.setPrototypeOf(obj, proto);
  return obj;
}

function myObjectCreate2(proto) {
  function ObjCreate() { };
  ObjCreate.prototype = proto;
  return new ObjCreate();
}

function myObjectAssign(obj, ...args) {
  args.forEach((elem) => {
    for (let key in elem) {
      obj[key] = elem[key];
    }
  });
  return obj;
}

console.log(myObjectAssign({}, { a: 1 }, { b: 2 }, { c: 3 }));