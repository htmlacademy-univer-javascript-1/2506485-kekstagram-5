function isLengthLine (line, maxLength) {
  return line.length <= maxLength;
}

function isPalindrome (str) {
  const line = str.replaceAll(' ', '').toLowerCase();
  let invertedLine = '';
  for (let i = line.length - 1; i >= 0 ;i--) {
    invertedLine += line[i];
  }
  return invertedLine === line;
}

console.log(isLengthLine('проверяемая строка', 20));
console.log(isLengthLine('проверяемая строка', 18));
console.log(isLengthLine('проверяемая строка', 10));
console.log(isPalindrome('топот'));
console.log(isPalindrome('ДовОд'));
console.log(isPalindrome('Кекс'));
console.log(isPalindrome('Лёша на полке клопа нашёл '));
