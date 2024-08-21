// function applyTwice(fn, value) {
//   return fn(fn(value));
// }

// const double = (x) => x * 2;

// console.log(applyTwice(double, 5)); // Output: 20 (double(5) -> 10, then double(10) -> 20)

function test(...args) {
  return args.reduce((total, args) => total + args, 0);
}

function calculate(operation, ...numbers) {
  if (operation === "add") {
    return numbers.reduce((total, num) => total + num, 0);
  } else if (operation === "multiply") {
    return numbers.reduce((total, num) => total * num, 1);
  }
}

console.log(calculate("add", 1, 2, 3)); // Output: 6
console.log(calculate("multiply", 2, 3, 4));
