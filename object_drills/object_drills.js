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

