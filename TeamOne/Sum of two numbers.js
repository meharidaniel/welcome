//adds two given numbers
// if the numbers are equal, returns triple

function sumOfTwoNumbers(firstNum, secondNum) {
  let sum = firstNum + secondNum;
  let returnedValue;
  firstNum == secondNum ? (returnedValue = sum * 3) : (returnedValue = sum);
  return returnedValue;
}
// let result = sumOfTwoNumbers(20, 20);
// let result = sumOfTwoNumbers(2, 20);
// let result = sumOfTwoNumbers(23, 15);
console.log(`The result is ${result}`);
