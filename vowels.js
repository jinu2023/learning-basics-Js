const readline = require("node:readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter A String : ", (word) => {
  vowels(word);
  rl.close();
});

function vowels(word) {
  let vCount = 0;
  let cCount = 0;
  for (i = 0; i < word.length; i++) {
    if (
      word[i] === "a" ||
      word[i] === "e" ||
      word[i] === "i" ||
      word[i] === "o" ||
      word[i] === "u"
    ) {
      vCount = vCount + 1;
    } else {
      cCount = cCount + 1;
    }
  }

  console.log(vCount, "Vowel count");
  console.log("count of consonants is:", cCount);
}
