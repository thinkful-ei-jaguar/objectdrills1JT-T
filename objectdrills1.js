'use strict';

function createMyObject () {
  return { 
    foo: 'bar',
    answerToUniverse: 42,
    'olly olly': 'oxen free',
    sayHello: function () {
      return "hello";
    },}
    
}

//console.log(createMyObject());

let obj = {};

function updateObject(obj) {
  //let obj = {};
  obj.foo = "foo";
  obj.bar = "bar";
  obj.bizz = "bizz";
  obj.bang = "bang";
  return obj;
}

//console.log(updateObject(obj));

function personMaker() {
  var person = {
    firstName: 'Paul',
    lastName: 'Jones',
    // replace `null` with a function that uses self reference to return
    // full name
    fullName: function(){return `${this.firstName} ${this.lastName}`;},
    
  };
  return person;
}
console.log(personMaker());