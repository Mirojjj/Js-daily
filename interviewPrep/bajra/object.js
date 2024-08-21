const person = new Object();

person.firstName = "miroj";
person.lastName = "rai";

delete person.firstName;

console.log("firstname:" + person.firstName + " lastname:" + person.lastName);

//nested Objects
const object = {
  firstName: "miroj",
  lastName: "rai",
  myCars: {
    car1: "hundai",
    car2: "ferrari",
  },
};

const infoObj = {
  firstName: "ram",
  lastName: "shahi",
  age: 30,
};

const objectLoop = () => {
  let text = "";
  for (x in infoObj) {
    text += infoObj[x] + " ";
  }
  console.log(text);
};

const objEntries = (infoObj) => {
  let text = "";
  for ([name, value] of Object.entries(infoObj)) {
    text += name + ":" + " " + value + "\n";
  }
  console.log("obj entries" + text);
};

objectLoop();
objEntries(infoObj);

console.log(`stringified object = ${JSON.stringify(infoObj)}`);

console.log(Object.values(infoObj)); //only return the values of the object

console.log(object.myCars.car1);
