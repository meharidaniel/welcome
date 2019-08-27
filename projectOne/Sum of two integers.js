function total(num1, num2) {
  let sum = num1 + num2;
  if (num1 == num2) {
    return 3 * sum;
  } else return sum;
}

let result = total(20, 20);
console.log(`The result is ${result}`);
