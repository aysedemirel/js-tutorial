const person = {
  name: "Zodiac Hasbro",
  age: 56
};
const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;
console.log(greeting);
/////////////////////////////////
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  const failureItems=[];
  for(let i = 0;i<arr.length;i++){
      failureItems .push(`<li class="text-warning">${arr[i]}</li>`);
  }
  return failureItems;
}
const failuresList = makeList(result.failure);
console.log(failuresList);
/////////////////////////////////
const createPerson = (name, age, gender) => {
  return {name,age,gender};
};
console.log(createPerson("Ayşe",25,"Female"));
/////////////////////////////////
const taylor = {
  name: "Taylor",
  sayHello() {
    return `Hello! My name is ${this.name}.`;
  }
};
console.log(taylor.sayHello());
/////////////////////////////////
const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  }
};
bicycle.setGear(3);
console.log(bicycle.gear);
/////////////////////////////////
class Vegetable{
  constructor(name)
  {
    this.name = name;
  }
}
const carrot = new Vegetable('carrot');
console.log(carrot.name); // 'carrot'
/////////////////////////////////
class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer() {
    return this._author;
  }
  // setter
  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}
const novel = new Book('anonymous');
console.log(novel.writer);
novel.writer = 'newAuthor';
console.log(novel.writer);
/////////////////////////////////
class Thermostat{
  constructor(fahrenheit){
     this._fahrenheit = fahrenheit;
  }
  get temperature(){
    return (5 / 9) * (this._fahrenheit - 32);
  }
  set temperature(celsius)
  {
   this._fahrenheit = (celsius * 9.0) / 5 + 32;
  }
}
const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius