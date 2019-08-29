//Takes two numbers
// if one of them or their sum is 50 returns true
// else returns false

function isFifty(firstNum, secondNum) {
  let sum = firstNum + secondNum;
  if (firstNum == 50 || secondNum == 50 || sum == 50) {
    return true;
  }
  return false;
}
// let checkFifty = isFifty(25, 25);
// let checkFifty = isFifty(25, 50);
// let checkFifty = isFifty(2, 5);
// let checkFifty = isFifty(50, 45);
console.log(`The result is ${checkFifty}`);
