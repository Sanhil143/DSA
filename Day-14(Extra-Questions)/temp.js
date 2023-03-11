// let n = 4

// const fib = (n) => {
//       if(n==0 || n == 1){
//             return n
//       }
//       return fib(n-1) + fib(n-2)

// }
// console.log(fib(n));


let s = "hello"

const reverse = (s) => {
      if (s.length == 1) {
            return s
      }
      return reverse(s.slice(1)) + s[0]
}
console.log(reverse(s));