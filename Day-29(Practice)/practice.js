//Reverse
let s = "madam"
let func = (s) => {
      let a = "";
      for (let i = s.length - 1; i >= 0; i--) {
            a += s[i];
      }
      return a;
}
// console.log(func(s));

let n = 12;

//Fibonacci
let func1 = (n) => {
      if (n == 0) return 0;
      if (n == 1) return 1

      return func1(n - 1) + func1(n - 2)
}
// console.log(func1(n));

//factorial recursively
let func2 = (n) => {
      if (n < 1) return 1;
      return n * func2(n - 1)
}
// console.log(func2(n));

//factorial loop
let func3 = (n) => {
      let fac = 1
      if (n == 0 || n == 1) return 1;
      else if (n > 1) {
            for (let i = n; i>1; i--) {
                  fac *= i
            }
            return fac;
      }
}
// console.log(func3(n));

// pallindrome

let num = 31

const f2 = (num) => {
      let r, sum = 0;
      let temp = num;
      while (num > 0) {
            r = num % 10;
            sum = sum*10 + r;
            num = parseInt(num / 10)
      }
      if (temp == sum) {
            return "pal" 
      } else {
            return 'no'
      }
}
// console.log(f2(num));

//Prime Number

const f3 = (num) => {
      let arr = []
      if(num==1)return false;
      if(num==2)return true;
      else if(n>2){
            for(let i=2; i<num; i++){
                  if(num%i == 0){
                        return false;
                  }else{
                        return true
                  }
                  
            }
            
      }
      
}
// console.log(f3(num));

//armstrong

let number = 153;
const f5 = (number) => {
      let sum = 0
      let temp = number
      while(number>0){
            let r = number%10;
            sum += r*r*r
            number = parseInt(number/10)
      }
      if(sum == temp){return 'armstrong'}
      else{return 'no'}
}
// console.log(f5(number));

let nums = 100;
const f4 = (nums) => {
      if(nums>0){
            f4(nums-1)
            console.log(nums + " ");
      }
      return nums
      
}
console.log(f4(nums));