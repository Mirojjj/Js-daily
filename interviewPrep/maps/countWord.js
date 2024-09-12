// Example: Counting Word Frequencies
const text = "apple banana apple orange banana apple";
const textAray = text.split(" ");
let appleCount = 0;
let bananaCount = 0;
let orangeCount = 0;

//brute force method
textAray.forEach((fruit) => {
  if (fruit === "apple") {
    appleCount += 1;
  } else if (fruit === "banana") {
    bananaCount += 1;
  } else {
    orangeCount += 1;
  }
});

//using map more scalable but takes more space
const fruitMap = new Map();

textAray.forEach((word) => {
  if (!fruitMap.has(word)) {
    fruitMap.set(word, 1);
  } else {
    fruitMap.set(word, fruitMap.get(word) + 1);
  }
});

console.log(fruitMap);
console.log({ appleCount, bananaCount, orangeCount });
