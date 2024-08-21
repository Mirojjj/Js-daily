console.log(1 + "1");
console.log(1 - "2");

let x = false;
let y = new Boolean(false);

console.log(x == y);
console.log(5 == "5");

const longNames = "Miroj Chamling Rai";

const nameShortner = (string) => {

  return string.substring(0, 10) + "...";
};

console.log(nameShortner(longNames));

var a = 20;
//let keyword
for (i = 0; i < 1; i++) {
  let a = 10;
  a = 20;
  console.log(a);
}

a = 40;
console.log(a);
