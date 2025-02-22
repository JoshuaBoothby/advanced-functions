"use strict";

function createPerson(name, age, isEdgerunner) {
  const person = {
    name: name,
    age: age,
    isEdgerunner: isEdgerunner,
  };
  return person;
}

const person1 = createPerson("Chuck", 38, true);
const person2 = createPerson("Brian", 85, false);
console.log(person1);
console.log(person2);
