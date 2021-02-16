const firstNumber = 15.678;
const secondNumber = 123.965;
const thirdNumber = 90.2345;
const sum = firstNumber + secondNumber + thirdNumber;
const sumFloor = 
  Math.floor(firstNumber) +
  Math.floor(secondNumber) +
  Math.floor(thirdNumber);
const rest500 = 500 - sum;
const discount = getRandomInt(5, 25);


console.log('Max',
  Math.max(firstNumber, secondNumber, thirdNumber));
console.log('Min',
  Math.min( firstNumber, secondNumber, thirdNumber));
console.log('sum',sum);
console.log('SumFloor', sumFloor);
console.log('Round to hundred',
  roundHundred(firstNumber, secondNumber, thirdNumber));
console.log('true or false :', sumFloor === false);
console.log('Rest :', rest500);
console.log('First', firstNumber.toFixed(2));
console.log('second', secondNumber.toFixed(2));
console.log('third', thirdNumber.toFixed(2));

function roundHundred(...value){
   return Math.round(value/100)*100
}

function getRandomInt(min, max){
  // від min до max, не включаючи max. Округлено до 2 знаків після коми.
  return (Math.random() * (max - min) + min).toFixed(2);
}

function eventPurchase(product){
  const profit = product/2 - (
    product * discount/100);
  
  return profit.toFixed(2);
}

console.log(`Cкидка ${discount}, 
Купівля товару за номером 2 ${eventPurchase(secondNumber)},
Купівля товару ціною 100 ${eventPurchase(100)},
Купівля товару ціною 1 ${eventPurchase(1)}` ); 
//fdsfdsfdfdsdfsdf