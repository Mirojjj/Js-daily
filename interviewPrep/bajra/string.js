const text1 = "Hello";
const text2 = "world";

const longText = "Please visit Microsoft and Microsoft!";
const newLongText = longText.replace(/Microsoft/g, "ram");
console.log(text1.concat(" ", text2));
console.log(newLongText);

let word = "m,i,r,o,j";
console.log(text1.repeat(2));
const wordArray = word.split(",");
console.log(wordArray[1]);
