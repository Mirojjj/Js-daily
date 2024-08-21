const num = 10;
const float = 10.8;

console.log(Math.trunc(float));

//return random number with min included and max excluded

function minIncMaxExRand(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

//with both included

function bothIncluded(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
