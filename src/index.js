const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let word = "";
  let sym = [];
  expr = expr.split("**********");

  for (i in expr) {
    word = expr[i];

    while (true) {
      if (word.length >= 10) {
        sym.push(word.slice(0, 10));
        word = word.slice(10);
      } else {
        sym.push(word);
        break;
      }
    }

    for (item in sym) {
      sym[item] = sym[item].replace(/(10)/gm, ".");
      sym[item] = sym[item].replace(/(11)/gm, "-");
      sym[item] = sym[item].replace(/\d+/gm, "");
      sym[item] = MORSE_TABLE[sym[item]];
    }

    expr[i] = sym.join("");
    sym = [];
  }
  return expr.join(" ");
}

module.exports = {
  decode,
};
