const people = [
  { name: "miroj", lastname: "rai", age: 20 },
  { name: "alice", lastname: "smith", age: 17 },
  { name: "bob", lastname: "johnson", age: 21 },
];

//returns new array of object with name and lastanme changed to uppercase
const mappedPeople = people.map((person) => {
  return {
    name: person.name.toUpperCase(),
    lastname: person.lastname.toUpperCase(),
  };
});

//return array of object with fullnames

const fullNames = people.map((person) => {
  return {
    fullNames: `${person.name} ${person.lastname}`,
  };
});

//returns a new array of people who are greater than 18 years of age
const greaterThan18 = people
  .filter((person) => person.age > 18)
  .map((person) => {
    return {
      fullNames: `${person.name} ${person.lastname}`,
      age: person.age,
    };
  });

console.log(mappedPeople);
console.log(fullNames);
console.log(greaterThan18);
