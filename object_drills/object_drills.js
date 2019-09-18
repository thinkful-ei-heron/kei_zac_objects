'use strict';
function createMyObject(){
  const obj = {
    foo: 'bar',
    answerToUniverse: 42,
    'olly olly': 'oxen free',
    sayHello: function(){
      return 'hello';
    }
  };
  return obj;
}

function updateObject(obj) {
  obj.foo = 'foo';
  obj.bar = 'bar';
  obj.bizz = 'bizz';
  obj.bang = 'bang';
  return obj;
}

function personMaker() {
  var person = {
    firstName: 'Paul',
    lastName: 'Jones',
    // replace `null` with a function that uses self reference to return
    // full name
    fullName: function(){
      return `${this.firstName} ${this.lastName}`;
    },
  };
  return person;
}

function keyDeleter(obj) {
  delete obj.foo;
  delete obj.bar;
  return obj;
}

function makeStudentsReport(data){
  const strArray = [];
  for (let i = 0; i < data.length; i++){
    strArray.push(`${data[i].name}: ${data[i].grade}`);
  }
  return strArray;
}

function enrollInSummerSchool(students) {
  let result = [];
  for (let i = 0; i < students.length; i++) {
    students[i].status = 'In Summer school';
    result.push(students[i]);
  }
  return result;
}

function findById(items, idNum){
  for (let i = 0; i < items.length; i++){
    if (items[i].id === idNum){
      return items[i];
    }
  }
  return null;
}

function validateKeys(obj, expectedKeys) {
  for (let i = 0; i < Object.keys(obj).length; i++) {
    if (!(expectedKeys[i] in obj)) return false;
  }
  return true;
}

const loaf = {
  flour: 300,
  water: 210,
};
//console.log(loaf.flour);
//console.log(loaf.water);
loaf.hydration = function() {};
loaf.hydration = function() {
  return loaf.water/loaf.flour*100;
};
//console.log(loaf.hydration());

const obj = {
  foo: 1,
  bar: 2,
  fum: 3,
  quux: 4,
  spam: 5,
};

/*
for (let key in obj) {
  console.log(key);
  console.log(obj[key]);
}
*/

const diet = {
  meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper'],
};
//console.log(`A hobbit's fourth meal of the day is ${diet.meals[3]}`);

const jobs = [
  {
    name: 'Zac',
    jobTitle: 'student',
    boss: 'Lincoln'
  },
  {
    name: 'Lincoln',
    jobTitle: 'president',
  },
  {
    name: 'Susan',
    jobTitle: 'turtle',
    boss: 'Lincoln'
  }
];
/*
for (let i = 0; i < jobs.length; i++) {
  if ('boss' in jobs[i]){
    console.log(`${jobs[i].jobTitle} ${jobs[i].name} doesn't report to anybody.`);
  } else {
    console.log(`Job title: ${jobs[i].jobTitle} - Name: ${jobs[i].name}`);
  }
}
*/

const cipher = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
};

function decode(msg, cipher) {
  let result = '';
  let arr = msg.split(' ');
  for (let i = 0; i < arr.length; i++) {
    if (!(arr[i][0] in cipher)) result += ' ';
    else result += arr[i][cipher[arr[i][0]]];
  }
  return result;
}

const message = decode('craft block argon meter bells brown croon droop', cipher);
//console.log(message);

function createCharacter(name, nickname, race, origin, attack, defense, weapon){
  return {
    name,
    nickname,
    race,
    origin,
    attack,
    defense,
    weapon,
    describe: function(){
      console.log(`${this.name} is a ${this.race} from ${this.origin} who uses ${this.weapon}`);
    },
    evaluateFight: function(opp){
      let yourAttack = this.attack - opp.defense;
      let oppAttack = opp.attack - this.defense;
      if (yourAttack < 0){
        yourAttack = 0;
      }
      if (oppAttack < 0){
        oppAttack = 0;
      }
      return `Your opponent takes ${yourAttack} and you receive ${oppAttack} damage`;
    },
  };
}

const characters = [
  createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6, 'a wizard staff'),
  createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1, 'the Ring'),
  createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2, 'String and Barrow Blade'),
  createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8, 'Anduril'),
  createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5, 'Bow and Arrow'),
];

characters.push(createCharacter('Arwen Undomiel', 'arwen', 'Half-Elf', 'Rivendell', 7, 7, 'Hadhafang'));
/*
characters.find(function(element) {
  return element.nickname === 'aragorn';
}).describe();
*/

const hobbits = characters.filter(element => element.race === 'Hobbit');
const attackGreaterThanFive = characters.filter(element => element.attack > 5);