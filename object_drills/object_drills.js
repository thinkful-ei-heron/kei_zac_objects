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

for (let i = 0; i < jobs.length; i++) {
<<<<<<< HEAD
  if ('boss' in jobs[i]){
    console.log(`${jobs[i].jobTitle} ${jobs[i].name} reports to ${jobs[i].boss}.`);
  } else {
    console.log(`${jobs[i].jobTitle} ${jobs[i].name} doesn't report to anybody.`)
  }
}
=======
//  console.log(`Job title: ${jobs[i].jobTitle} - Name: ${jobs[i].name}`);
}

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
console.log(message);
>>>>>>> 77553849185d8298a8bb66144374c413bc549cd5
