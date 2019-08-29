//This function replaces a character from a string
// by the given index

function replaceAChar(str, num) {
  let nwStrArr = str.split("");
  nwStrArr.splice(num, 1);
  return nwStrArr.join("");
}
let replacedChar = replaceAChar("Dani", 3);
// let replacedChar = replaceAChar("Tommi", 2);
// let replacedChar = replaceAChar("Bran", 0);
// let replacedChar = replaceAChar("Lions", 4);
console.log(`The word is ${replacedChar}`);
