function combinator(instr, outstr, index) {
  for (var i = index; i < instr.length; i++) {
    outstr = outstr.concat(instr.charAt(i));

    //print the result
    console.log(outstr);
    combinator(instr, outstr, i + 1);

    outstr = outstr.substr(0, outstr.length - 1);
  }
}

combinator("Dani", "", 0); // a, ab, abc, ac, b, bc, c
