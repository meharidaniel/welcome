function reverseNumber(number) {
return (String(number).split("").reverse().join(""));
}
let result = reverseNumber(59624731);
console.log(result);