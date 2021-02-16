const firstProduct = 15.678;
const secondProduct = 123.965;
const thirdProduct = 90.2345;
const sum = firstProduct + secondProduct + thirdProduct;
const sumFloor = 
  Math.floor(firstProduct) +
  Math.floor(secondProduct) +
  Math.floor(thirdProduct);
const rest500 = 500 - sum;
const discount = getRandomInt(5, 25);


console.log('Max',
  Math.max(firstProduct, secondProduct, thirdProduct));
console.log('Min',
  Math.min( firstProduct, secondProduct, thirdProduct));
console.log('Sum',sum);
console.log('SumFloor', sumFloor);
console.log('Round to hundred',
  roundHundred(firstProduct), roundHundred(secondProduct), roundHundred(thirdProduct) );
console.log('True or false :', sumFloor === false);
console.log('Rest :', rest500);
console.log('First', firstProduct.toFixed(2));
console.log('Second', secondProduct.toFixed(2));
console.log('Third', thirdProduct.toFixed(2));

console.log(`Discount ${discount}, 
Buying second product 2 ${eventPurchase(secondProduct)},
Buying first product ${eventPurchase(firstProduct)},
Purchase of product at a price 1 ${eventPurchase(1)}` );

function roundHundred(value){
   return Math.round(value/100)*100;
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