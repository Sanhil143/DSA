let a = 4
let b = 10

const swap = (a,b) => {
      a = a+b
      b = a-b
      a = a-b
      return `${a} ${b}`
}
console.log(swap(a,b));