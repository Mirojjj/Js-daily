const text = "The rain in SPAIN stays mainly in the plain";
const flower = "flower";

console.log(text.match(/flow/)); //simply provides the match word
console.log(text.match(/ain/g)); //this expression checks for "ain" on a global scale, case sensetive
console.log(text.match(/ain/gi)); //this expression checks for "ain" on global scale, case Insensitive

console.log("-----------match all -------------------");
const interator = text.matchAll(/ain/gi);
console.log(Array.from(interator));
