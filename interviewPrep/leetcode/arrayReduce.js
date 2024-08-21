//reduce  function
//sum of array as a reducer function

const reduce = (array, init) => {
  val = init;
  for (let i = 0; i < array.length; i++) {
    val = fn(val, array[i]);
  }
  return val;
};

const fn = (acc, current) => {
  return acc + current;
};

const result = reduce([1, 2, 3, 4, 5, 6], 0);
console.log(result);

const array = [1, 2, 3, 4, 5];
// console.log(array.length);

for (let i = array.length - 1; i >= 0; i--) {
  console.log(array[i]);
}
