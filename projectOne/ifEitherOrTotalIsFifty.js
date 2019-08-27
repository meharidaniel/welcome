function ifEitherOrTatalIsFifty(num1, num2) {
  let sum = num1 + num2;
  if (sum === 50 || num1 === 50 || num2 === 50) {
    return true;
  } else return false;
}

let checked = ifEitherOrTatalIsFifty(50, 25);
console.log(`The value is ${checked}`);
