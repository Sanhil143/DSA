
//Question1
// let i;
// for(i=0; i<3; i++){
//       const log = () => {
//             console.log(i);
//       }
//       setTimeout(log,100)
// }


//Question 2
// function foo() {
//       let a = b = 0;
//       a++;
//       return a;
// }
// console.log(foo());;

//Question /3
// let c = 0
// function immediate() {
//       if(c === 0){
//             let c = 1;
//             console.log(c);
//             c += 1
//       }
//       console.log(c);
// }
// console.log(immediate());

// Question4
// let n = 841
// let x = 1
// for(let i=0; i<50; i++){
//       let nx = (x + n / x) / 2
//       x = nx
// }
// console.log(x);


// Questions5
function getResult(x,y,flag){
      return new Promise((resolve) => {
            setTimeout(() => {
                  flag ? resolve(x ** y) : resolve(x * y);
            },2000);
      })
}

async function addFunc(x,flag) {
      let res = 0
      for(let i=1; i<=3; i++){
            res += await getResult(x,i,flag);
      }
      return res
}
addFunc(10,true).then((sum) => {
      console.log(sum);
})
addFunc(20,false).then((sum) => {
      console.log(sum);
});