function Dog(name, owner) { // create dog; we can use name = "Otto" and as well owner = "Božica"
  if (name === undefined && owner === undefined) {
    this.name = "Unknown";
    this.owner = "Unknown owner";
  } else {
    this.name = name;
    this.owner = owner;
  }
}


Dog.prototype.bark = function (barkCount = "5") { // barkCount defined in argument as example
  var barkCount = barkCount;
  if (barkCount === undefined) {
    barkCount = 1;
  }
  for (var i = 0; i < barkCount; i++) {
    console.log("Bark!");
  }
};

Dog.prototype.print = function () {
  console.log(this.owner, "is owner of a lovely fictional Jack Russell puppy called", this.name);
};

var dog = new Dog("Otto", "Božica");
console.log(dog);

var unknownDog = new Dog();
console.log(unknownDog);

dog.bark(); // 5 x bark!
dog.bark(1); // 1 x bark!

dog.print(); // Božica is owner of a lovely fictional Jack Russell puppy called Otto


