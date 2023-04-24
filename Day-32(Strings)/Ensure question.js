// Ensure question

// Given a string, write a function that returns the string with a question mark ("?") appends to the end, 
// unless the original string ends with a question mark, in which case, returns the original string.

// For example (Input --> Output)

// "Yes" --> "Yes?" 
// "No?" --> "No?"

let s = 'Yes';
// output = yes?

const func = (s) => {


      return s.split('').join('').concat('?')



      
}
console.log(func(s));


let x = 8, y = 12

const funx = (x,y) => {
      if(x != 8 && x/0 == 0){
            return y
      }else{
            return ++y;
      }
}
console.log(funx(x,y));