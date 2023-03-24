
// simple print lists

class List{
      constructor(data){
            this.head = {
                  value:data,
                  next:null
            }
            this.tail = this.head
      }

      

}
let arr = 10
const nodes = new List(arr)
nodes.display(15)
      
console.log(nodes);



