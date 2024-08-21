function person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;

  this.speaks = function () {
    console.log(`${firstName} is speaking...`);
  };
}

const student = new person("miroj", "rai");

student.speaks();
// student.speaks();
