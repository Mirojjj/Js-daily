const array = [1, 2, 3, 4, 5];

// const newArray = array.map((x) => x * x);

console.log(Math.pow(2, 2));

const squareArray = (arr) => {
  let newArray = [];
  arr.forEach((x) => {
    newArray.push(x * x);
  });
  return newArray;
};

const newArray = squareArray(array);
console.log(newArray);

array.forEach((x) => {
  console.log(x * x);
});

const filteredArray = array.filter((x) => {
  if (x % 2 === 0) {
    return x;
  }
});

//some retruns us with boolean value
const testSome = array.some((x) => x > 2);
console.log(testSome);

//every

const testEvery = array.every((x) => x > 2);
{
  console.log(testEvery);
}
console.log({ testEvery });
console.log({ filteredArray });

// console.log(newArray);

// const user = [
//   {
//     id: "1",
//     name: "miroj",
//   },
//   {
//     id: "2",
//     name: "ram",
//   },
// ];

// const userArray = user.map((x, y) => {
//   x, y;
// });

// console.log(userArray);
