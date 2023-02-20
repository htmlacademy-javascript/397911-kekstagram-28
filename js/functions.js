
/* eslint-disable no-console */

// Функция для проверки длины строки

const stringLength = (string, characterNumber) => string.length <= characterNumber;

console.log('Длина строки:', stringLength('проверяемая строка', 20));
console.log('Длина строки:', stringLength('проверяемая строка', 18));
console.log('Длина строки:', stringLength('проверяемая строка', 10));

//Функция для проверки, является ли строка палиндромом

function palindrome(str) {
  const lowercasedStr = str.toLowerCase();

  let withoutSpacesStr = '';
  for (let i = 0; i < lowercasedStr.length; i++) {
    if (lowercasedStr[i] !== ' ') {
      withoutSpacesStr += lowercasedStr[i];
    }
  }

  let check = '';
  for (let i = withoutSpacesStr.length - 1; i >= 0; i--) {
    check += withoutSpacesStr[i];
  }

  return withoutSpacesStr === check;
}

console.log(palindrome('топот'));
console.log(palindrome('ДовОд'));
console.log(palindrome('Кекс'));
console.log(palindrome('Лёша на полке клопа нашёл '));


// Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9
// и возвращает их в виде целого положительного числа

function searchForNumbers (strOrNumber) {
  const str = strOrNumber.toString();

  let result = '';
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char >= '0' && char <= '9') {
      result += char;
    }
  }
  return parseInt(result, 10);
}


console.log(searchForNumbers('2023 год'));
console.log(searchForNumbers('ECMAScript 2022'));
console.log(searchForNumbers('1 кефир, 0.5 батона'));
console.log(searchForNumbers('а я томат'));

console.log(searchForNumbers(2023));
console.log(searchForNumbers(-1));
console.log(searchForNumbers(1.5));


// функцию padStart()

const padStart = (input, minLength, fillString) => {
  let result = input;
  while (result.length < minLength) {
    const fillStringLen = minLength - result.length;
    const slicedFillString = fillString.slice(0, fillStringLen);
    result = slicedFillString + result;
  }
  return result;
};

console.log(padStart('1', 2, '0'));
console.log(padStart('1', 4, '0'));
console.log(padStart('q', 4, 'werty'));
console.log(padStart('q', 4, 'we'));
console.log(padStart('qwerty', 4, '0'));
