var kopek = {
  "ismi": "Kuçu kuçu",
  "bacak": 4,
  "kuyruk": 1,
  "sevmedikleri": ["Kediler"],
  "rengi" : "siyah",
  1: "birBir"
};

var kuyruk_1 = kopek.kuyruk;
var rengi = kopek["rengi"];
console.log(kuyruk_1);
console.log(rengi);
var bir = 1;
console.log(kopek[bir]);
kopek["kuyruk"] = 2;
/////////////////////////
var dogs = {
  Fido: "Mutt",  Hunter: "Doberman",  Snoopie: "Beagle"
};
var myDog = "Hunter";
var myBreed = dogs[myDog];
console.log(myBreed);
///////////////////////////
var someObj = {
  propName: "John"
};
function propPrefix(str) {
  var s = "prop";
  return s + str;
}
var someProp = propPrefix("Name");
console.log(someObj[someProp]);
///////////////////////
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

ourDog.bark = "bow-wow";
/////////////////////
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

ourDog.bark = "bow-wow";
////////////////////////
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"],
  "bark": "bow-wow"
};

delete ourDog.bark;
console.log(ourDog);
/////////////////////
function phoneticLookup(val) {
  var result = "";
  var deger = {
    "alpha":"Adams",
    "bravo":"Boston",
    "charlie":"Chicago",
    "delta":"Denver",
    "echo": "Easy",
    "foxtrot":"Frank"
  };
  result = deger[val];
  return result;
}
phoneticLookup("charlie");
///////////////////////////
function checkObj(obj, checkProp) {
  var isVar = obj.hasOwnProperty(checkProp);
  if(!isVar){
     return "Not Found";}
  else{
     return obj[checkProp];
  }
}
checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift");
////////////////////////
var ourMusic = [
  {
    "artist": "Daft Punk",
    "title": "Homework",
    "release_year": 1997,
    "formats": [ 
      "CD", 
      "Cassette", 
      "LP"
    ],
    "gold": true
  }
];
///////////////////

var muzik = [
{
   "artist": "Billy Joel",
   "title": "Piano Man",
   "release_year": 1973,
   "formats": [
      "CD",
      "8T",
      "LP"
    ],
   "gold": true
},
{
   "artist": "Marry Joel",
   "title": "Piano Woman",
   "release_year": 1973,
   "formats": [
     "CD",
     "8T",
     "LP"
   ],
   "gold": true
}];
console.log(muzik[1].formats[1]);

///////////////////////////
var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

var gloveBoxContents = myStorage.car.inside["glove box"];
///////////////////////////////
var ourPets = [
  {
    animalType: "cat",
    names: [
      "Meowzer",
      "Fluffy",
      "Kit-Cat"
    ]
  },
  {
    animalType: "dog",
    names: [
      "Spot",
      "Bowser",
      "Frankie"
    ]
  }
];
ourPets[0].names[1];
ourPets[1].names[0];
//////////////////////////////
var recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};
function updateRecords(records, id, prop, value) {
  if(value != "" && prop != "tracks")  
      records[id][prop] = value;
  if(prop == "tracks" && !records[id].hasOwnProperty("tracks")) 
      records[id]["tracks"] = [value];
  if(prop == "tracks" && value != "")
       records[id][prop].push(value);
  if(value == "")
       delete records[id][prop]; 
  return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');
updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me")
updateRecords(recordCollection, 2548, "artist", "")
////////////////////////