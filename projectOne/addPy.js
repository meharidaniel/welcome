function addPy(str) {
  let array = [];
  array = str.split("");
  if (array[0] == "P" && array[1] == "y") {
    return str;
  } else return "Py" + str;
}
let theStr = addPy("alazar");
console.log(`The string is ${theStr}`);
