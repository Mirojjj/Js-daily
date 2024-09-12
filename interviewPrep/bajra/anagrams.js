//to check if the given two strings are anagarams or not
//anagrams : contains same letter bnut in different order

function checkAnagrams(string1, string2) {
  return normalize(string1) === normalize(string2);
}

function normalize(string) {
  return string.toLowerCase().trim().split("").sort().join("");
}

console.log(checkAnagrams("silent", "listen"));
console.log(checkAnagrams("hello", "world"));
