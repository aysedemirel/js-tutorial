function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2));
console.log(howMany("string", null, [1, 2, 3], { }));


const sum = (... args) => {
  return args.reduce((a, b) => a + b, 0);
}
console.log(sum(1,2,3));


var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr);

const arr2 = [6, 89, 3, 45];
const maximus2 = Math.max(...arr2);

// ERROR: const spreaded = ...arr;

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // Change this line

console.log(arr2);











