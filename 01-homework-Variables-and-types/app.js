const penPrice = 15.678;
const pineApplePrice = 123.965;
const applePrice = 90.2345;
const sumPricesAll = penPrice + pineApplePrice + applePrice;
const sumPricesAllFloor = 
  Math.floor(penPrice) +
  Math.floor(pineApplePrice) +
  Math.floor(applePrice);
const banknote500 = 500;
const restClient = banknote500 - sumPricesAll;
const minDiscount = 0;
const maxDiscount = 100;
const discount = Math.floor(
  Math.random() * (maxDiscount - minDiscount + 1) ) + minDiscount;
const maxPrice = Math.max(penPrice, pineApplePrice, applePrice);
const minPrice = Math.min( penPrice, pineApplePrice, applePrice);
const sumOfAllGoods = Math.round( (sumPricesAll) / 100 ) * 100;
const isEvenSumOfAllGoods = sumPricesAllFloor % 2 === 0;
const averagePriceOfAllGoods = +( sumPricesAll / 3 ).toFixed(2);
const incomeFrombuyingAllGoods = 
  +( sumPricesAll / 2 - (sumPricesAll * discount/100) ).toFixed(2) ;

console.log(`
  Maximum price : ${maxPrice}
  Minimum price : ${minPrice}
  The sum of all goods ${sumPricesAll}
  The sum of all goods without coins ${sumPricesAllFloor}
  The sum of all goods is rounded to the nearest hundred ${sumOfAllGoods}
  Is the even sum of all goods (rounded down) : ${isEvenSumOfAllGoods}
  The rest when paying 500 ${restClient}
  The average price of goods ${averagePriceOfAllGoods} 
  Random discount = ${discount}, 
  Net income from buying a pineApple, apple and pen ${incomeFrombuyingAllGoods}
`);