// Funcitions as Value
function sayHello(name) {
  console.log(`Hello ${name}`);
}
let say = sayHello;
say("Nans");

// JS Anonymous Function
let say = function (name) {
  console.log(`Hello ${name}`);
};
say("Nans");

// JS Arrow Function
let sayHello = (name) => {
  let say = `hello ${name}`;
  console.log(say);
};
sayHello("Nans");

// simple
let sayHello = (name) => console.log(`hello ${name}`);
sayHello("Nans");

// return in arrow function
let sum = (x, y) => x + y;
console.log(sum(100, 200));

//Object Method
const person = {
  name: "Nans",
  sayHello: function (name) {
    console.log(`Hello ${name}`);
  },
};
person.sayHello("Hady");

// JS This
console.log(this); // window

function testThis() {
  console.log(this); // window
}
testThis();

const person = {
  firstName: "Nanda",
  lastName: "Hady Mulya",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
console.log(person.fullName());

const person = {
  name: "Nanda",
  sayHello: function (name) {
    console.log(`Hi ${name}, my name is ${this.name}`);
  },
};
person.sayHello("Hady");

// Get Set
const person = {
  firstName: "Nanda",
  lastName: "Hady Mulya",
  set setName(name) {
    this.firstName = name;
  },
  get getName() {
    return `${this.firstName}`;
  },
};
person.setName = "Samsul";
console.log(person.getName);
