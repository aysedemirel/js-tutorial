const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};
const {today, tomorrow} = HIGH_TEMPERATURES;
console.log(tomorrow);
/////////////////////////
const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;
console.log(highToday);
/////////////////////////
const user = { name: 'John Doe', age: 34, year: 2021};
const { name, age } = user;
const { name:name_user, age:age_user } = user;
console.log(name_user);
/////////////////////////
const userJohn = {
  johnDoe: { 
    age: 34,
    email: 'johnDoe@freeCodeCamp.com'
  }
};
const { johnDoe: { age: userAge, email: userEmail }} = userJohn;
console.log(userEmail);
/////////////////////////
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};
const{today:{low:lowToday,high:highTodayy}}=LOCAL_FORECAST;
/////////////////////////
const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b);
const [x, y,,, z] = [1, 2, 3, 4, 5, 6];
console.log(x, y, z);
/////////////////////////
let aa = 8, bb = 6;
[bb,aa]=[aa,bb];
console.log(aa,bb);
/////////////////////////
const [aaa, bbb, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(aaa, bbb);
console.log(arr);
/////////////////////////
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  const [a, b, ...dizi] = list; 
  return dizi;
}
const dizi = removeFirstTwo(source);
/////////////////////////
const profileDataa = {name: "Ayşe", age: 25, nationality: "TR", location: "Ankara"}
const profileUpdate = (profileData) => {
  const { name, age, nationality, location } = profileData;
  console.log(name);
}
const profileUpdatee = ({ name, age, nationality, location }) => {}
profileUpdate(profileDataa);
/////////////////////////
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};
const half = ({ max, min }) => {console.log((max + min) / 2.0)};
half(stats);
/////////////////////////



