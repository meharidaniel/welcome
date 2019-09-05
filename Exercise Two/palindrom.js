function checkPalindrom(str) {
  let reversedStr = str
    .split("")
    .reverse()
    .join("");
  if (str !== reversedStr) {
    console.log("!Palindrom");
  }
  if (str === reversedStr) {
    console.log("Palindrom");
  }
}
checkPalindrom("Dani");
