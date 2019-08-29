// checks if the given number is
// multiple of 3||7

function isMultiple(num) {
  if (num % 7 == 0 || num % 3 == 0) {
    return true;
  }
  return false;
}
let multiOf = isMultiple(28);
// let multiOf = isMultiple(2);
// let multiOf = isMultiple(26);
// let multiOf = isMultiple(63);
console.log(`Is it a multiple of 3||7?  ${multiOf}.`);
