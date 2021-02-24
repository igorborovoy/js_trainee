Function.prototype.myBind = function(context, ...args){
  let callback = this;
  return function(){
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

function show(){
  console.log(this);
}

show();
const newFunc = show.myBind(b, 1, 2);
console.log(newFunc());