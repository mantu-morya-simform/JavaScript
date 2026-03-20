const camelCase = (message) => {
  let parts = message.split("-");
  parts = parts.filter((word) => word != "");
  let result = parts.map((word, index) => {
    if (index == 0) {
      return word.toLowerCase();
    } else {
      return word[0].toUpperCase() + word.slice(1);
    }
  });
  result = result.join("");
  console.log(`camalCesing Of given String "${message}" is: ${result}`);
};

const camelCaseLoop = (message) => {
  let parts = message.split("-");
  parts = parts.filter((word) => word != "");
  for (let i = 1; i < parts.length; i++) {
    let word = parts[i];
    parts[i] = word[0].toUpperCase() + word.slice(1);
  }
  let = resultMessage = parts.join("");
  console.log(`camalCesing Of given String "${message}" is: ${resultMessage}`);
};
//

camelCaseLoop("-aside-abc-def");
camelCase("-aside-abc-def");
