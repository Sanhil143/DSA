

// nth fibonacci number


let n = 10;

const func = (n) => {
      if(n === 0){
            return 0;
      }
      else if(n === 1 || n === 2){
            return 1;
      }
      else{
            return func((n-1)+(n-2))
      }
}

console.log(func(n));


//TC: 2 to the power n