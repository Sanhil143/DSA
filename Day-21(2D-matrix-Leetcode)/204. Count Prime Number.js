let n = 10

var countPrimes = function(n) {
      let seen = new Array(n).fill(0);
     let ans = 0;
     let primes = [];
     for (let num = 2; num < n; num++) {
         if (seen[num]) continue
         ans++
         primes.push(num);
         for (let mult = num * num; mult < n; mult += num)
             seen[mult] = 1
     }
     return ans
  };
  console.log(countPrimes(n));