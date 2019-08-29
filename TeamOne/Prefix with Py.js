// this function checks a string
//if the string starts with "Py" returns the string
// if not adds "Py" to the beginning of the string

function pyAdder(str) {
  if (str.startsWith("Py")) {
    return str;
  }
  return `Py${str}`;
}
// let returnedStr = pyAdder("Alazar");
// let returnedStr = pyAdder("Python");
// let returnedStr = pyAdder("Dani");
// let returnedStr = pyAdder("Physical");
console.log(`The returnes string is ${returnedStr}`);
