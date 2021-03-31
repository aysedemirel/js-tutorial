function functionName() {
  console.log("Hello World");
}
functionName();

console.log("-------------");

var someVar = "Hat";
function myFun() {
  var someVar = "Head";
  return someVar;
}
console.log(someVar);
console.log(myFun());

console.log("-------------");

var sum = 0;
function addSum(num) {
  sum = sum + num; // returned undefined
}
addSum(3);
console.log(sum);

console.log("-------------");

function nextInLine(arr, item) {
  arr.push(item);
   return arr.shift();
}

var testArr = [1,2,3,4,5];

console.log("Before: " + testArr);
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
