
let firstNumber = 0;
let lastNumber = 0;
let currentNumber = 0;
let sumFromTo = 0;

firstNumber = parseInt( prompt( 'Введіть перше число' ) );
lastNumber = parseInt( prompt( 'Введіть останнє число' ) );

while( !isFinite(firstNumber) ){
  firstNumber = prompt( 'Введіть перше число' );
  firstNumber = parseInt(firstNumber);
}

while(!isFinite(lastNumber)){
  lastNumber = prompt( 'Введіть  останнє число' );
  lastNumber = parseInt(lastNumber);
}

const passEven = confirm( 'Пропускати нам парні числа ?' );

if(firstNumber > lastNumber){
  [firstNumber, lastNumber] = [lastNumber, firstNumber]
}

for(let currentNumber = firstNumber; currentNumber <= lastNumber; currentNumber++){
  if(passEven && (currentNumber % 2) === 0) continue;
  sumFromTo += currentNumber;
}

alert(`Cума всіх чисел від ${firstNumber} до ${lastNumber} : ${sumFromTo}`);
console.log(`Cума всіх чисел від ${firstNumber} до ${lastNumber} : ${sumFromTo}`);