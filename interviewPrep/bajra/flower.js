const string = "flower";
const subString = "rose";

const checkIncludes = (string, subString) => {
  if (string.includes(subString)) {
    return true;
  } else {
    return false;
  }
};

console.log(checkIncludes(string, subString));
