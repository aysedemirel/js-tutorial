const myFunc = function() {
  const myVar = "value";
  return myVar;
}

const myFuncInline = () => {
  const myVar = "value";
  return myVar;
}

const myFuncShorter = () => "value";

const magic = () => new Date();

////////////////////////////////////////
const doubler = (item) => item * 2;
doubler(4);

const doublerShorter = item => item * 2;

const multiplier = (item, multi) => item * multi;
multiplier(4, 2);

const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1, 2], [3, 4, 5]));

////////////////////////////////////////
const greeting = (name = "Anonymous") => "Hello " + name;
console.log(greeting("John"));
console.log(greeting());

const degisken = (isim = "World") => "Hello "+isim; 
console.log(degisken("Ayşe")); // Hello Ayşe
console.log(degisken());       // Hello World

const increment = (number, value=1) => number + value;










