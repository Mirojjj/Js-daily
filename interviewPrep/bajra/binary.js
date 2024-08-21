const a = 2;
const c = 5;
const ba = 1001;
const bc = 1010;

const binaryA = a.toString(2); //decimal to binary conversion
const binaryB = c.toString(2);

//binary to decimal conversion
const deciA = parseInt(15, 16);

console.log(deciA);

function bianryAdd(a, b) {
  const sum = a + b;
  return sum.toString(2);
}

function binarySub(a, b) {
  const sub = a - b;
  return sub.toString(2);
}

//binary and operation

function binaryAnd(a, b) {
  let da = parseInt(a, 2);
  let db = parseInt(b, 2);

  const and = da & db;
  return and.toString(2);
}

function binaryOr(a, b) {
  let da = parseInt(a, 2);
  let db = parseInt(b, 2);

  const or = da | db;
  return or.toString(2);
}

function binaryXor(a, b) {
  let da = parseInt(a, 2);
  let db = parseInt(b, 2);

  const xor = da ^ db;
  return xor.toString(2);
}

function binaryNot(a) {
  let da = parseInt(a, 2);
  const not = ~da;
  return not.toString(2);
}

function leftShift(a) {
  let da = parseInt(a, 2);
  const leftShift = da << 1;
  return leftShift.toString(2);
}

function rightShift(a) {
  let da = parseInt(a, 2);
  const rightShift = da >> 1;
  return rightShift.toString(2);
}

console.log(bianryAdd(a, c));
console.log(binarySub(c, a));
console.log(binaryAnd(ba, bc));
console.log(binaryOr(ba, bc));
console.log(binaryXor(ba, bc));
console.log(binaryNot(ba));
console.log(leftShift(ba));
console.log(rightShift(ba));
