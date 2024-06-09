function modifyText(inputText) {
  const textLength = inputText.length;
  let outputText = '';

  if (textLength % 15 === 0) {
    outputText = reverseAndConvertToASCII(inputText);
  }
  else if (textLength % 3 === 0) {
    outputText = reverseText(inputText);
  }
  else if (textLength % 5 === 0) {
    outputText = convertToASCII(inputText);
  }
  else {
    outputText = inputText;
  }

  return outputText;
}

function reverseText(inputText) {
  return inputText.split('').reverse().join('');
}

function convertToASCII(inputText) {
  return inputText.split('').map(char => char.charCodeAt(0)).join(' ');
}

function reverseAndConvertToASCII(inputText) {
  return inputText.split('').reverse().map(char => char.charCodeAt(0)).join(' ');
}
