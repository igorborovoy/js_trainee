//---------Functional----------//

function Person(name) {
  this.name = name;
  this.getName = function () {
    return this.name;
  }
}

function Man(name, faialHair) {
  Person.call(this, name);
  this.faialHair = faialHair;
  this.getFaialHair = function () {
    return this.faialHair;
  }
}


//---------Prototypes----------//

function Person(name) {
  this.name = name;
}

Person.prototype.getName = function () {
  return this.name;
}

function Man(name, faialHair) {
  Person.call(this, name);
  this.faialHair = faialHair;
}

Man.prototype = Object.create(Person.prototype);
Man.prototype.constructor = Man;

Man.prototype.getFaialHair = function () {
  return this.faialHair;
}


//----------ES6---------//

class Person {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

class Man extends Person {
  constructor(name, faialHair) {
    super(name);
    this.faialHair = faialHair;
  }

  getFaialHair() {
    return this.faialHair;
  }
}

