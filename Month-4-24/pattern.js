//   *  
//  *** 
// *****
//  ***
//   *  

const n = 5;

const patternPrinting = (n) => {
  let diamond = "";
  for (let i = 0; i < n; i++) {
    let spaces = ' '.repeat(Math.abs(Math.floor((n - 1) / 2) - i));
    let stars = '*'.repeat(Math.ceil((i * 2 + 1) / 2) + Math.floor((i * 2 + 1) / 2));
    diamond += spaces + stars + '\n';
}

for (let i = n - 2; i >= 0; i--) {
    let spaces = ' '.repeat(Math.abs(Math.floor((n - 1) / 2) - i));
    let stars = '*'.repeat(Math.ceil((i * 2 + 1) / 2) + Math.floor((i * 2 + 1) / 2));
    diamond += spaces + stars + '\n';
}
return diamond;
}

console.log(patternPrinting(n))