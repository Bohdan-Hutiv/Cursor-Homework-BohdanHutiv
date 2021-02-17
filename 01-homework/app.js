const penPrice = 15.678;
const pineApplePrice = 123.965;
const applePrice = 90.2345;
const sumPricesAll = penPrice + pineApplePrice + applePrice;
const sumPricesAllFloor = 
  Math.floor(penPrice) +
  Math.floor(pineApplePrice) +
  Math.floor(applePrice);
const buyerHas500Rest = 500 - sumPricesAll;
const discount = getRandomInt(5, 25);


console.log(`
  Maximum price : ${Math.max(penPrice, pineApplePrice, applePrice)}
  Minimum price : ${Math.min( penPrice, pineApplePrice, applePrice)}
  The sum of all goods ${sumPricesAll}
  The sum of all goods without coins ${sumPricesAllFloor}
  The sum of all goods is rounded to the nearest hundred ${ Math.round( (penPrice + pineApplePrice + applePrice) / 100 ) * 100 }
  Is the even sum of all goods (rounded down) : ${isEven(sumPricesAllFloor)}
  The rest when paying 500 ${buyerHas500Rest}
  The average price of goods ${(sumPricesAll / 3).toFixed(2) } 
  Random discount = ${discount}, 
  Net income from buying a pineApple, apple and pen ${ profitFromPurchase(pineApplePrice, applePrice, penPrice) } `);

function getRandomInt(min, max){
  // Повертає випадкове число від min до max, не включаючи max. Округлено до 2 знаків після коми.
  return +(Math.random() * (max - min) + min).toFixed(2);
}

function isEven(value) {
  if (value % 2 === 0)
    return true;
  else
    return false;
}

function profitFromPurchase(...productPrices){
  let profit = 0;
  for(let productPrice of productPrices){
    profit = profit + productPrice/2 - (productPrice * discount/100);
  }
  return +profit.toFixed(2);
} 