function Dog(name, owner) { // create dog; we can use name = "Otto" and as well owner = "Božica"
  if (name === undefined && owner === undefined) {
    this.name = "Unknown";
    this.owner = "Unknown owner";
  } else {
    this.name = name;
    this.owner = owner;
  }
}

// SHORTER SOLUTION

Dog.prototype.bark = function (barkCount = "1") {
  for (var i = 0; i < barkCount; i++) {
    console.log(this.name, "says: Bark!");
  }
};

/* LONGER SOLUTION

Dog.prototype.bark = function (barkCount) {
  var barkCount = barkCount;
  if (barkCount === undefined) {
    barkCount = 1;
  }
  for (var i = 0; i < barkCount; i++) {
    console.log("Bark!");
  }
};

*/

Dog.prototype.print = function () {
  console.log(this.owner, "is owner of a lovely fictional Jack Russell puppy called", this.name);
};

var dog = new Dog("Otto", "Božica");
console.log(dog);

var unknownDog = new Dog();
console.log(unknownDog);

dog.bark(); // 1 x Otto says: Bark!
unknownDog.bark(5); // 5 x Unknown says: Bark!

dog.print(); // Božica is owner of a lovely fictional Jack Russell puppy called Otto


