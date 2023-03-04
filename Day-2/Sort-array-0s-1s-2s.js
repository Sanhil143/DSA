 let arr = [0,2,1,2,0]

 const check = (arr) => {
      let n0 = 0
      let n1 = 0
      let n2 = 0
      
      
      for(let i=0; i<arr.length; i++){
          if(arr[i]==0){
              n0++
          }
          else if(arr[i]==1){
              n1++
          }
          else{
              n2++
          }
      
              
          }
       let j = 0

          for(let i=0; i<n0; i++){
              arr[j]=0
              j++
          }
          for(let i=0; i<n1; i++){
              arr[j]=1
              j++
          }
          for(let i=0; i<n2;i++){
              arr[j]=2
              j++
          }
          return arr
 }
 console.log(check(arr));