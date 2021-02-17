const penPrice = 15.678;
const pineApplePrice = 123.965;
const applePrice = 90.2345;
const sum123 = penPrice + pineApplePrice + applePrice;
const sum123Floor = 
  Math.floor(penPrice) +
  Math.floor(pineApplePrice) +
  Math.floor(applePrice);
const buyerHas500Rest = 500 - sum123;
const discount = getRandomInt(5, 25);


console.log(`
  Maximum number : ${Math.max(penPrice, pineApplePrice, applePrice)}
  Minimum number : ${Math.min( penPrice, pineApplePrice, applePrice)}
  The sum of all goods ${sum123}
  The sum of all goods without coins ${sum123Floor}
  The sum of all goods is rounded to the nearest hundred ${ Math.round( (penPrice + pineApplePrice + applePrice) / 100 ) * 100 }
  Is the even sum of all goods (rounded down) : ${isEven(sum123Floor)}
  The rest when paying 500 ${buyerHas500Rest}
  The average price of pineApple ${pineApplePrice.toFixed(2)} Apple ${applePrice.toFixed(2)} penPrice ${penPrice.toFixed(2)}
  Random discount = ${discount}, 
  Net income from buying a pineApple ${profitFromPurchase(pineApplePrice)}
  Net income from buying a apple ${profitFromPurchase(applePrice)}
  Net income from buying a penPrice ${profitFromPurchase(penPrice)} `);

function getRandomInt(min, max){
  // Повертає випадкове число від min до max, не включаючи max. Округлено до 2 знаків після коми.
  return (Math.random() * (max - min) + min).toFixed(2);
}

function isEven(value) {
  if (value % 2 === 0)
    return true;
  else
    return false;
}

function profitFromPurchase(product){
  const profit = product/2 - (
  product * discount/100);
  
  return profit.toFixed(2);
} 