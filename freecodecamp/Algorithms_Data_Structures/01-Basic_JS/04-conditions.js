function test (myCondition) {
  if (myCondition == true) // equality operator 
  {
     return "It was true";
  }
  return "It was false";
}

function isNumberThree(num)
{
  if(num === 3) // strict equality operator
  {
      return "three";
  }
  return "not number three";
}
test(true);
test(false);
isNumberThree(3);
isNumberThree("3");
isNumberThree(8);

console.log(typeof 3); // number
console.log(typeof "3"); // string

console.log(1 !=  2); // true
console.log(1 != "1"); // false
console.log(1 != '1'); // false
console.log(1 != true); // false
console.log(0 != false); // false

console.log("////////////////SWITCH///////////////////");

var lowercaseLetter ="a";
switch(lowercaseLetter) {
  case "a": // case means ===
  case "A":
    console.log("A");
    break;
  case "b":
  case "B":
    console.log("B");
    break;
}


