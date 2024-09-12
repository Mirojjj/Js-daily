// Question: Write a function that takes an array of objects and a property name, returning a new array containing only the objects where the specified property is truthy.
//lets say based on age
function returnObjectBasedOnProperty(array) {
  return array.filter((user) => user.age > 17);
  //   return array.map((user) => Object.values(user) > 17);
}

const array = [
  {
    name: "miroj",
    age: 20,
  },
  {
    name: "ram",
    age: 20,
  },
  {
    name: "ghansyam",
    age: 17,
  },
];

console.log(returnObjectBasedOnProperty(array));
