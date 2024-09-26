const checkLengthLine = function (line, maxLength) {
  return line.length <= maxLength;
};

const checkPalindrome = function (line) {
  const newLine = line.replaceAll().toLowerCase();
  let invertedLine;
  for (let i = newLine.length - 1; i !== 0 ;i--) {
    invertedLine += newLine[i];
  }
  return invertedLine === newLine;
};

const extractNumber = function(line){
  line = toString(line);
  let number;
  for (let i = 0; i < line.length;i++) {
    if (Number.isNaN(line[i])){
      number += line[i];
    }
  }
  return Number.isNaN(number);
};

checkLengthLine('проверяемая строка', 20);
checkLengthLine('проверяемая строка', 18);
checkLengthLine('проверяемая строка', 10);
checkPalindrome('Лёша на полке клопа нашёл ');
extractNumber('2023 год');
