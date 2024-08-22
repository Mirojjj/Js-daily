//higher Orderfunction taking an returning function as an arguement

const calculate = function (fn) {
  return function (...args) {
    const result = fn(...args);
    return result;
  };
};

const areaRectangle = (l, b) => {
  return l * b;
};

const areaCircle = (r) => {
  return 2.14 * Math.pow(r, 2);
};

const calculateAreaR = calculate(areaRectangle);
const calculateAreaC = calculate(areaCircle);

console.log(calculateAreaR(2, 3));
console.log(calculateAreaC(6));

//higherOrderfunction taking function as an arguement

const array = [1, 2, 3, 4, 5];

const operation = function (fn, array) {
  const result = fn(array);
  return result;
};

const sumOfArray = (array) => {
  return array.reduce((acc, curr) => acc + curr, 0);
};

const squareElementsOfArray = (array) => {
  return array.map((x) => Math.pow(x, 2));
};

const arraySum = operation(sumOfArray, array);
const sqArray = operation(squareElementsOfArray, array);

console.log(arraySum);
console.log(sqArray);
