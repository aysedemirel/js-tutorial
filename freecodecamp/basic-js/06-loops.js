var myArray = [];
var i=5;
while(i>=0)
{
  myArray.push(i--);
}
//////////////////////////
var myArray = [];
for(var  i= 1;i<6;i++)
{
  myArray.push(i);
}
//////////////////////////
var ciftSayilar = [];
for(var i=0; i<=100; i+=2)
{
   ciftSayilar.push(i);
}
console.log(ciftSayilar);
//////////////////////////
var myArray = [];
for(var i=9;i>0;i-=2)
{
  myArray.push(i);
}
//////////////////////////
var arr = [10, 9, 8, 7, 6];
for (var i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}
//////////////////////////
var myArr = [ 2, 3, 4, 5, 6];
var total = 0;
for(var i=0;i<myArr.length;i++)
{
  total += myArr[i];
}
//////////////////////////
var arr = [
  [1,2], [3,4], [5,6]
];
for (var i=0; i < arr.length; i++) {
  for (var j=0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}
//////////////////////////
function multiplyAll(arr) {
  var product = 1;
  for(var i=0;i<arr.length;i++)
  {
    for(var j=0;j<arr[i].length;j++)
    {
      product *=arr[i][j];
    }
  }
  return product;
}

multiplyAll([[1,2],[3,4],[5,6,7]]);
//////////////////////////
var ourArray = []; 
var i = 5;
while (i < 5) {
  ourArray.push(i);
  i++;
}
console.log("Result:" + ourArray);
//////////////////////////
var ourArray = []; 
var i = 5;
do {
  ourArray.push(i);
  i++;
} while (i < 5);
console.log("Result:" +ourArray);
//////////////////////////
var myArray = [];
var i = 10;
do{
 myArray.push(i);
  i--;
}
while (i < 5);
console.log("Result first:" +myArray);
//////////////////////////
var secondArray = [];
var i = 10;
while (i < 5){
 secondArray.push(i);
  i--;
}
console.log("Result second:" +secondArray);
//////////////////////////
function sum(arr, n) {
  if(n<=0)
    return 0;
  return sum(arr,n-1)+arr[n-1];
}
console.log("Result second:" +sum([1,2,3],2));
//////////////////////////
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop) {
  for(var i = 0;i <contacts.length;i++)
  {
    if(contacts[i].firstName == name)
    {
      if(contacts[i].hasOwnProperty(prop)){
         return contacts[i][prop];
      }
      else{
        return "No such property";
      }
    }
  }
   return "No such contact";
}

lookUpProfile("Akira", "likes");
lookUpProfile("Kristian", "lastName");
lookUpProfile("Sherlock", "likes");
lookUpProfile("Harry", "likes");
lookUpProfile("Akira", "address");
//////////////////////////
function countDown(n){
  if(n<1)
  {
    return [];
  }
  else{
    const numArray = countDown(n-1);
    numArray.unshift(n);
    return numArray;
  }
}

countDown(10);
//////////////////////////
function rangeOfNumbers(startNum, endNum) {
  if(startNum>endNum)
  {
    return [];
  }
  else{
   const array = rangeOfNumbers(startNum+1, endNum);
   array.unshift(startNum);
   return array;
  }
};
rangeOfNumbers(1, 5);

