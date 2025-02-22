"use strict";

function Person(name, age, isEdgerunner) {
  this.name = name;
  this.age = age;
  this.isEdgerunner = isEdgerunner;
}

const personCon = new Person("Frank", 35, true);
console.log(personCon);
