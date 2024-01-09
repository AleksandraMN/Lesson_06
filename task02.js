'use strict';

const isPrime = (x) => {
   let y = true;
   for (let i = 2; i < x; i++) {
      if ((x % i) === 0) {
         y = false;
      } 
   }
      return y;
};

console.log(isPrime(151));



