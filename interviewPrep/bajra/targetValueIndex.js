// Question: Write a function that takes a sorted array of numbers and a target number, returning the index of the target number in the array. If the target number is not found, return -1
function returnIndex(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == target) {
      return i + 1;
    }
  }
  return -1;
}

console.log(returnIndex([5, 3, 4, 2, 1], 3));
