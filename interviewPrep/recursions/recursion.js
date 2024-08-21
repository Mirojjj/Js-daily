function factorial(n) {
  if (n == 0) {
    return 1;
  }

  return n * factorial(n - 1);
}

console.log(factorial(5));

//string reverse using recursion

function reverseString(string) {
  if (string == "") {
    return string;
  }
  return reverseString(string.substr(1)) + string[0];
}

console.log(reverseString("miroj"));

//fibonacci series using js

function fibo(n) {
  if (n == 0) {
    return 0;
  }
  if (n == 1) {
    return 1;
  }

  return fibo(n - 1) + fibo(n - 2);
}

let n = 9;

for (let i = 0; i < n; i++) {
  console.log(fibo(i));
}
