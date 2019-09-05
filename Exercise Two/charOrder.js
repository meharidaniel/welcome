function charOrder(str) {
  return str
    .split("")
    .sort()
    .join("");
}
let ordered = charOrder("alazar");
console.log(ordered);
