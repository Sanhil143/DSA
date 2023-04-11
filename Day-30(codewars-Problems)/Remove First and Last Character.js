// Remove First and Last Character

// It's pretty straightforward. Your goal is to create a function that removes the first and last characters 
// of a string. You're given one parameter, the original string. You don't have to worry with
//  strings with less than two characters.

let str = 'eloquent' // Output :'loquen'

function removeChar(str) {
      //You got this!
      let res = ''
      let ans = '';
      for(let i=0; i<str.length; i++){
            if(i === 0 || i === str.length-1){
                  ans += str[i]
            }else{
                  res += str[i]
            }
      }
      return res;
      // return str.slice(1, -1);
      // return str.substring(1, str.length-1);
      
};
console.log(removeChar(str));