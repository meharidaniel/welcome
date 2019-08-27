function multipleOfThreeOrSeven(num) {
  if (num % 3 === 0 || num % 7 === 0) {
    return true;
  } else return false;
}
let mul = multipleOfThreeOrSeven(9);
console.log(`It is ${mul}`);
