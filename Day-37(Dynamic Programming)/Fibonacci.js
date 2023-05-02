
let n = 10;
//use recursive function

const func = (n) => {
      if(n<=1){
            return n;
      }
      return func(n-1)+func(n-2)
}
console.log(func(n));


let dp = new Array(n).fill(0);
const func1 = (n) => {
      if(n<=1){
            return n;
      }
      else if(dp[n] !== 0){
            return dp[n];
      }
      else{
           return dp[n] = func1(n-1)+func1(n-2)
      }
}
console.log(func(n));
