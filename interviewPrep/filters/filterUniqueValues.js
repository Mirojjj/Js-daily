// Question: Write a function that takes an array of numbers and returns a new array containing only the unique values.

function uniqueValues(array) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (!newArray.includes(array[i])) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

const array = [1, 2, 3, 4, 4, 5];
console.log(uniqueValues(array));
