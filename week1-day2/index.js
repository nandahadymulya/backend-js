// JS Arrays
var ducks = ["Huey", "Dewey", "Louie"];
var len = ducks.length; // 3
console.log(len);
var gorengan = [];
gorengan[0] = "cakue";
gorengan[1] = "bakwan";
gorengan[2] = "gehu";
console.log(gorengan);

var a = ["Stef", "Jason"]; // Stef, Jason
a.push("Brian"); // Stef, Jason, Brian
a.unshift("Kelly"); // Kelly, Stef, Jason, Brian
a.pop(); // Kelly, Stef, Jason
a.shift(); // Stef, Jason
a.sort(); // Jason, Stef
console.log(a);

//JS Object
let user = {
  // an object
  name: "John", // by key "name" store value "John"
  age: 30, // by key "age" store value 30
};
console.log(user.name);

// JS Match
var round1 = Math.round(4.5);
var round2 = Math.round(4.4);
var floor1 = Math.floor(4.9);
var floor2 = Math.floor(-4.2);
var sqrt = Math.sqrt(64);
var low = Math.min(0, 150, 30, 20, -8, -200);
var high = Math.max(0, 150, 30, 20, -8, -200);
var rand1to10 = Math.floor(Math.random() * 10 + 1);

// JS Conditions
// Use if to specify a block of code to be executed, if a specified condition is true
if (hour < 18) {
  greeting = "Selamat Siang";
}

//Use else to specify a block of code to be executed, if the same condition is false
if (hour < 18) {
  greeting = "Selamat Siang";
} else {
  greeting = "Selamat Malam";
}

// Use else if to specify a new condition to test, if the first condition is false
if (hour < 10) {
  greeting = "Selamat pagi";
} else if (hour < 20) {
  greeting = "Selamat siang";
} else {
  greeting = "Selamat malam";
}

// JS Switch
var nilai = "B";
switch (nilai) {
  case "A":
    console.log("Wow Anda lulus dengan baik");
    break;
  case "B":
  case "C":
    console.log("Anda Lulus");
    break;
  case "D":
    console.log("Anda tidak lulus");
    break;
  default:
    console.log("Anda salah jurusan");
}

// JS Loop
var text = "";
for (let i = 0; i < 5; i++) {
  text += "The number is " + i + "\n";
}
console.log(text);

let text = "";
let i = 0;
while (i < 10) {
  text += "\nThe number is " + i;
  i++;
}
console.log(text);

let text = "";
let i = 0;
do {
  text += "\nThe number is " + i;
  i++;
} while (i < 10);
console.log(text);

// JS For In
const person = {
  firstName: "Samsudin",
  middleName: "Sayang",
  lastName: "Anak",
};
for (const key in person) {
  console.log(`${key} : ${person[key]}\n`);
}

// JS For Of
const cars = ["BMW", "Volvo", "Mini"];
let text = "";
for (let x of cars) {
  text += x + "\n";
}
console.log(text);

// JS Break
let text = "";
for (let i = 0; i < 10; i++) {
  if (i === 3) {
    break;
  }
  text += "The number is " + i + "\n";
}
console.log(text);

// JS Continiue
let text = "";
for (let i = 0; i < 10; i++) {
  if (i === 3) {
    continue;
  }
  text += "The number is " + i + "\n";
}
console.log(text);

// JS Dates
const d = new Date();
d.getFullYear();
d.getMonth();
d.getDate();
d.getHours();
d.getMinutes();

// JS Typeof
console.log(typeof "john");
console.log(typeof 3.14);
console.log(typeof true);
console.log(typeof false);
console.log(typeof x);
console.log(typeof [1, 2, 3, 4]);

// JS Type Conversion
parseInt();
parseFloat();
Number();
Number.toString();
