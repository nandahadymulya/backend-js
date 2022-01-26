// Variables defined with let cannot be redeclared.
let x = "John Doe";
let x = 0;
var y = "John Doe";
var y = 0;

// Variables declared with the var keyword can NOT have block scope
{
  var x = 2;
}
// x CAN be used here
{
  let y = 2;
}
// y can NOT be used here

let x = 10; /*
// value dari nilai x adalah 10
Ini
Adalah
Multiline
Comment
*/

// Number
let x = 5;
let y = 10.2;

// String
let name = "Samsudin Sayang Anak";
let answer1 = "It's alright"; // The backslash (\) escape character turns special characters into string characters
let text1 = "It's alright.";
let text2 = "The character \\ is called backslash.";

// Back-Tics Syntax
let backTickText = `Samsudin
Sayang
Anak`;

// Interpolasi
// ${...}

// String Methods
let name = "Samsudin Sayang Anak"; // To find the length of a string, use the built-in length property
let length = name.length; // slice() extracts a part of a string and returns the extracted part in a new string.
let part = name.slice(7, 13);

// The replace() method replaces a specified value with another value in a string
let newName = name.replace("Sayang", "Punya");

// String Search
var s = "Connie Client";
var name1 = s.substring(2, 8); // "nnie C"
var name2 = s.substr(2, 8); // "nnie Cli"
var len = s.length; // 13
var ie1 = s.indexOf("ie"); // 4
var ie2 = s.lastIndexOf("ie"); // 9

// Arithmetic Operators
var a = 15;
var b = 4;
var c = 0; // pengurangan
c = a - b;
console.log(`${a} - ${b} = ${c}`); // Perkalian
c = a * b;
console.log(`${a} * ${b} = ${c}`); // pemangkatan
c = a ** b;
console.log(`${a} ** ${b} = ${c}`); // Pembagian
c = a / b;
console.log(`${a} / ${b} = ${c}`); // Modulo
c = a % b;
console.log(`${a} % ${b} = ${c}`);

// String Operators
let text1 = "Darmaji";
let text2 = "Saeful";
let text3 = text1 + " " + text2;
console.log(text3);
var x = "5" + 2 + 3;
console.log(x);
var x = 5 + 2 + "3";
console.log(x);

// Assignment Operators
// pengisian nilai
var score = 100;
console.log("score = " + score); // pengisian dan menjumlahan dengan 5
score += 5;
console.log("score = " + score); // pengisian dan pengurangan dengan 2
score -= 2;
console.log("score = " + score); // pengisian dan perkalian dengan 2
score *= 2;
console.log("score = " + score);

// pengisian dan pembagian dengan 4
score /= 4;
console.log("score = " + score); // pengisian dan pemangkatan dengan 2
score **= 2;
console.log("score = " + score); // pengisian dan modulo dengan 3;
score %= 3;
console.log("score = " + score);

//Comparison Operators
var x = 20;
var y = 19;

// sama dengan
var hasil = x == y;
console.log(`${x} == ${y} = ${hasil}`); // lebih besar
var hasil = x > y;
console.log(`${x} > ${y} = ${hasil}`); // lebih besar samadengan
var hasil = x >= y;
console.log(`${x} >= ${y} = ${hasil}`);

// lebih kecil
var hasil = x < y;
console.log(`${x} < ${y} = ${hasil}`); // lebih kecil samadengan
var hasil = x <= y;
console.log(`${x} <= ${y} = ${hasil}`); // tidak samadengan
var hasil = x != y;
console.log(`${x} != ${y} = ${hasil}`);

//Logical Operators
var x = 6;
var y = 3; // &&
console.log(x < 10 && y < 1);
console.log(x < 10 && y > 1);
// ||
console.log(x == 5 || y == 5);
console.log(x == 6 || y == 0);
console.log(x == 0 || y == 3);
console.log(x == 6 || y == 3); // !
console.log(!(x === y));
console.log(!(x > y));

// JS Functions
function namaFungsi() {
  console.log("Hello World!");
}
namaFungsi();

let x = kali(4, 3); // Function is called, return value will end up in x
function kali(a, b) {
  return a * b; // Function returns the product of a and b
}
console.log(x);

// code here can NOT use carName
function namaFungsi() {
  var name = "Suryana"; // code here CAN use carName
}
console.log(name); // code here can NOT use carName
