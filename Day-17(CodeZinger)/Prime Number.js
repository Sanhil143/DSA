// Prime Number
// Given an integer, find whether the number is a Prime number or not. 

// Display 1 if N is prime else 0. 

// Input 11 
// Output 1 

// 11 can be divided exactly by 1 and 11. Hence it's a prime number.



let n = 10

const primeNum = (n) => {
      let prime = new Array(n);
      let count = 0;
      for (let i = 2; i < n; i++) {
            if (prime[i]) continue;
            count++;

            for (let j = i; j * i < n; j++) {
                  prime[j * i] = 1;
            }
      }
      console.log(prime);
      return count;
}
console.log((primeNum(n)));
