const reverseString = (string) => {
  return string.split("").reverse().join("");
};

console.log(reverseString("miroj"));

//using recursion

function reverseUsingRec(string) {
  if (string == "") return string;

  return reverseUsingRec(string.substr(1)) + string[0];
}

console.log(reverseUsingRec("miroj"));
