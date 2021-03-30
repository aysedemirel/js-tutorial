// comment
/* second style comment */

// Data types : undefined, null, 
// boolean, string, symbol, bigint, number, and object

var ourName;
ourName = "Ayse";
var yourName;
yourName = ourName;

var myVar = 0;

// String values in JavaScript may be written with single or double quotes
// a string has the same kind of quote at the beginning and end
var doubleQuoteStr = "This is a string"; 
var singleQuoteStr = 'This is also a string';

var lastNameLength = 0;
var lastName = "Lovelace";
lastNameLength = lastName.length;

var firstName = "Ayse";
var firstLetter = firstName[0];

// When JavaScript variables are declared, they have an initial value of undefined
// If you do a mathematical operation on an undefined variable your result will be NaN which means "Not a Number"
//  If you concatenate a string with an undefined variable, you will get a literal string of undefined.

// In JavaScript all variables and function names are case sensitive. This means that capitalization matters.
console.log("/////////////// ARITHMETIC OPERATIONS ///////////////////");

var a = 5;
var b = 6;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a++);
console.log(++b);

var myVar = 1;
myVar += 5;
console.log(myVar);

console.log("////////////// FUNCTION IN FUNCTION ////////////////////");

function sayHello(){
  function assignHello(){
      return "Hello";
  }
  var helloVar = assignHello();
  return helloVar;
}
console.log(sayHello());

console.log("/////////// VAR ///////////////////////");

function calcSumAfterDouble(arr){
  var sum=0;
  for(var i=0;i<arr.length;i++){
     var doubleVal=arr[i]*2;
     sum+=doubleVal;
  }
  
  console.log(i);
  console.log(doubleVal)
  console.log(sum);
  return sum;
}
console.log(calcSumAfterDouble([2,3,4]));

console.log("/////////////// CONST ///////////////////");

const number='3.14';
const name=['Ayse','Mustafa'];

console.log(number);
console.log(name);

// number=3.14; - const can't change declaration

console.log("///////////// CHANGE CONST /////////////////////");

// const can change contents and add contents
const colors=['red','green','blue'];
colors[3]='orange';

const obj={name:'ayse'};
obj.surname='demirel';

console.log(colors);
console.log(obj);

console.log("////////////// FREEZE ////////////////////");

const flower=['rose','daisy'];
Object.freeze(flower); // object won't effect from changing
colors[3]='orchid';

var person={name:'ayse'};
Object.freeze(person);
person.surname='demirel';
person.name = "Busra";

console.log(flower); // rose, daisy
console.log(person); // ayse

person = JSON.parse(JSON.stringify(person)); // unfreeze the object
person.surname='demirel';
console.log(person); // ayse demirel

console.log("///////////// SCOPE /////////////////////");

const root='root'
console.log(root);
{
  const rootChild='rootChild';
  console.log('rootChild');
  {
    const rootChildChild='rootChildChild'
    console.log(rootChildChild)
  }
}

console.log("///////////// FUNCTION /////////////////////");
function cc() {
    var x = 4;
    console.log(`c function called ${x}`);
}

function bb() {
    var x = 3;
    cc();
    console.log(`b function called ${x}`);
}


function aa() {
     var x = 2;
     bb();
     console.log(`a function called ${x}`);
}

var x = 1;
aa();
console.log(`main function called ${x}`);

console.log("//////////////////////////////////");

    function aaa() {

        function bbb() {

            function ccc() {
                console.log(`ccc function called ${x}`);
            }

            var x = 3;
            ccc();
            console.log(`bbb function called ${x}`);
        }


        var x = 2;
        bbb();
        console.log(`aaa function called ${x}`);
    }

    var x = 1;
    aaa();
    console.log(`main function called ${x}`);

console.log("/////////////// CLOSURE ///////////////////");

 function saySomething(something) {
        return function (who) {
            console.log(`${something} ${who}`);
        }
    }

saySomething("Hi")("Ayse");
saySomething("How are you ?")("Mustafa");
const sayFine = saySomething("Fine,"); // keep function to second parameter
sayFine("Thank you");

console.log("////////////// THIS ////////////////////");

const user = {
  name: 'Ayse', 
  sayHello : function(){
    const self = this;
    console.log(self);
    
    const sayAgain = function(){
      console.log(self)
    }
    sayAgain();
  }
}

user.sayHello();

const arr =[true, this];
console.log(arr);

const arr2 = [true, function a(){console.log(this)}];
arr2[1]();

console.log("//////////////////////////////////");
console.log("//////////////////////////////////");
console.log("//////////////////////////////////");










