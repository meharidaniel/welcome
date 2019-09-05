function titleIt(sentence) {
  const newArray = sentence.split(" ").map(function(elem) {
    return elem[0].toUpperCase() + elem.slice(1);
  });
  return newArray.join(" ");
}
let upperCase = titleIt("The quick brown fox jump over the wall");
console.log(upperCase);
