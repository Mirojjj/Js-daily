//merge two sorted Arrays

function mergeArrays(array1, array2) {
  const newArray = array1.concat(array2);
  const returnArray = [];
  let k = 0;
  for (let i = 0; i < newArray.length; i++) {
    if (!returnArray.includes(newArray[i])) {
      returnArray[k] = newArray[i];
      k++;
    }
  }
  return returnArray.sort();
}

array1 = [1, 3, 4, 5];
array2 = [1, 2, 3, 4, 5];
console.log(mergeArrays(array1, array2));
