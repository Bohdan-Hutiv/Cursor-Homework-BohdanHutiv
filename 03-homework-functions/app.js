function getMaxdiDigit(number){
  const stringOfDigit = String(number);
  let maxDigit = null;

  for(const digit of stringOfDigit){
    if(digit > maxDigit){
      maxDigit = digit;
    }
  }

  return Math.trunc(maxDigit);
}
console.log(`Створити функцію getMaxDigit(number) – яка отримує будь-яке число та виводить найбільшу цифру в цьому числі ${getMaxdiDigit(1232456789)}`);

function mathPow(number, degree){
  let result = number;

  if(degree === 0){

    return 1;
  }
  for(let i = 1; i <= degree; i++){
    number *= number;
  }

  return result;
}

console.log(`Створити функцію, яка визначає ступінь числа ${mathPow(4, 4)}` );

function formatName(name){
  return  name[0].toUpperCase() + name.slice(1).toLowerCase();
}

console.log(`Створити функцію, яка форматує ім'я, роблячи першу букву великою ${formatName('basil')}`  );

function getClearSalary(salary, taxPercent){
  return salary - salary * (taxPercent / 100);
}

console.log(`Створити функцію, яка вираховує суму, що залишається після оплати податку від зарабітньої плати. ${getClearSalary(1000, 10)}`);

function getRandomNumber(firstNumber, secondNumber){
  return Math.random() * (firstNumber - secondNumber + 1)  + secondNumber;
}

console.log(`Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M. ${Math.trunc(getRandomNumber(1, 20) ) }` );

function countLetter(letter, word){

  let counterOfLetters = 0;

  for (let char of word){
    if(char.toLowerCase() === letter.toLowerCase() ){
      counterOfLetters++;
    }
  }
  return counterOfLetters;
}

console.log(`Створити функцію, яка рахує скільки разів певна буква повторюється в слові ${countLetter("а", "Асталавіста")}` );