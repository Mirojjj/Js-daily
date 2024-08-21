const array = [100, 99, 0, 98];

const findLargest = (array) => {
  let largest = array[0];

  for (let i = 1; i < array.length; i++) {
    if (largest < array[i]) {
      largest = array[i];
    }
  }
  return largest;
};

console.log(findLargest(array));
