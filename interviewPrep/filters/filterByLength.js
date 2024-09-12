//Question: Write a function that takes an array of strings and a number n, and returns a new array containing only the strings with a length greater than n.

function stringGreaterThanN(array, n) {
  return array.filter((string) => string.length > n);
}

const array = ["miroj", "ram", "shyam", "geda"];

console.log(stringGreaterThanN(array, 4));
