// SHORTER SOLUTION

function Dog(name = "Unknown", owner = "Unknown owner") {
  this.name = name;
  this.owner = owner;
}
/* LONGER SOLUTION

function Dog(name, owner) {
  if (name === undefined) {
    this.name = "Unknown";
  } else {
    this.name = name;
  }
  if (owner === undefined) {
    this.owner = "Unknown owner";
  } else {
    this.owner = owner;
  }
}
*/

// SHORTER SOLUTION

Dog.prototype.bark = function (barkCount = 1) {
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

dog.bark(); // 1 x Otto says: Bark!

dog.print(); // Božica is owner of a lovely fictional Jack Russell puppy called Otto
