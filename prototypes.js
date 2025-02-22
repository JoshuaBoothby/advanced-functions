"use strict";

function Animal(name, species, cyberEnhanced) {
  this.name = name;
  this.species = species;
  this.cyberEnhanced = cyberEnhanced;
}
Animal.prototype.build = function () {
  console.log(
    this.name +
      " is a " +
      this.species +
      " and is cyber enhanced " +
      this.cyberEnhanced
  );
};
const normalDog = new Animal("Truman", "dog", false);
const cyberCat = new Animal("Whiskers", "cat", true);
normalDog.build();
cyberCat.build();
