function findGreater(a, b) {
  return a > b ? "a is greater" : "b is greater or equal";
}
findGreater(13,18);
///////////////////////////////
function checkEqual(a, b) {
   return a==b?"Equal" : "Not Equal"
}

checkEqual(1, 2);

///////////////////////////////
function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" 
    : (a > b) ? "a is greater" 
    : "b is greater";
}

findGreaterOrEqual(5,2);
///////////////////////////////
function checkSign(num) {
  return num>0 ? "positive"
        : num < 0 ? "negative"
        : "zero";
}

checkSign(10);