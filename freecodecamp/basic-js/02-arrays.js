var arr = [["Ayse", 2], ["Mustafa", 1]];
console.log(arr[0], arr[1][0]);

console.log("---------------------");

var arr1 = [1,2,3];
arr1.push(4);
console.log(arr1);

var arr2 = ["Ayse", "Mustafa", "Deniz"];
arr2.push(["Demirel", "Forever"]);
console.log(arr2);

console.log("---------------------");

var threeArr = [1, 4, 6];
var oneDown = threeArr.pop();
console.log(oneDown); // 6
console.log(threeArr); // 1,4

console.log("---------------------");

// It works just like .pop(), except it removes the first element instead of the last.
var ourArray = ["Stimpson", "J", ["cat"]];
var removedFromOurArray = ourArray.shift();

console.log(ourArray);
console.log(removedFromOurArray);

// pop -> remove last element
// shift -> remove first element
console.log("---------------------");

var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift();
ourArray.unshift("Happy"); // put first

console.log(ourArray);

console.log("---------------------");

var myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line
myArray.unshift(["Paul",35]);
console.log(myArray);


