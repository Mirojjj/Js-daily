function reverseString(string) {
  return string.split("").reverse().join("");
}

function checkPalindrome(orgString, revString) {
  if (orgString === revString) {
    return true;
  } else {
    return false;
  }
}

const revString = reverseString("miroj");

if (checkPalindrome("aba", revString)) {
  console.log("palindrome");
} else {
  console.log("not palindrome");
}
