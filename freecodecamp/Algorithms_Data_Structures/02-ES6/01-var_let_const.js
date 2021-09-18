let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";
  
  console.log(catName);
  console.log(quote);
}
catTalk();

/////////////////////
var deger = 5;

function deneme()
{
  var deger_diger = 7;
  console.log(deger);
  {
    var deger_blok = 4;
  }
  console.log(deger_diger);
  console.log(deger_blok);
}
deneme();
// console.log(deger_diger); // error: undefined deger_diger

/////////////////////
let val = 15;

function denemeDiger()
{
  let val_diger = 17;
  console.log(val);
  {
    let val_blok = 14;
  }
  console.log(val_diger);
  // console.log(val_blok); // error: undefined val_blok
}
denemeDiger();
// console.log(val_diger); // error: undefined val_diger
/////////////////////
var numArray = [];
for (var i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray);
console.log(i);
/////////////////////
var numDizi = [];
var j;
for (j = 0; j < 3; j++) {
  numDizi.push(j);
}
console.log(numDizi);
console.log(j);
/////////////////////
var printNumTwo;
for (var k = 0; k < 3; k++) {
  if (k === 2) {
    printNumTwo = function() {
      return k;
    };
  }
}
console.log(printNumTwo());
/////////////////////
let printNum;
for (let l = 0; l < 3; l++) {
  if (l === 2) {
    printNum = function() {
      return l;
    };
  }
}
console.log(printNum());
// console.log(l); // Error: undefined l
/////////////////////
function checkScope() {
  let i = 'function scope';
  if (true) {
    let i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}
checkScope();
/////////////////////
function printManyTimes(str) {
  const SENTENCE = str + " is cool!";
  for (let i = 0; i < str.length; i+=2) {
    console.log(SENTENCE);
  }
}
printManyTimes("freeCodeCamp");
/////////////////////
const s = [5, 6, 7];
// s = [1, 2, 3]; // TypeError: Assignment to constant variable.
s[2] = 45;
console.log(s);
/////////////////////
const arr = [5, 7, 2];
function editInPlace() {
  arr[0]=2;
  arr[1]=5;
  arr[2]=7;
  console.log(arr);
}
editInPlace();
/////////////////////
let obj = {
  name:"FreeCodeCamp",
  review:"Awesome"
};
Object.freeze(obj);
obj.review = "bad";      // useless 
obj.newProp = "Test";    // useless
console.log(obj);        // { name: 'FreeCodeCamp', review: 'Awesome' }
/////////////////////
function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  Object.freeze(MATH_CONSTANTS);
  try {
    MATH_CONSTANTS.PI = 99; // useless
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
console.log(PI);
/////////////////////