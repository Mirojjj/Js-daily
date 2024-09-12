// function sum(a, b) {
//   return a + b;
// }

// console.log(sum(1, 2));

// const user = {
//   name: "Ran",
//   class: "bachelor",
// };

const array = [1, 2, 3, 5, 4, 12, 12, 1, 123, , 123, 2];

function printOddEven(array) {
  for (i = 0; i < array.length; i++) {
    if (array[i] === 5) {
      console.log(i);
    }
  }
}

printOddEven(array);
//   let odd = [];
//   let even = [];
//   for (i = 0; i < array.length; i++) {
//     if (array[i] % 2 == 0) {
//       even.push(array[i]);
//     } else {
//       odd.push(array[i]);
//     }
//   }

//   console.log(odd);
//   console.log(even);
