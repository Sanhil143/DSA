
class Node {
      constructor(value){
            this.value = value,
            this.next = null
      }
}

class linkedList {
      constructor(){
            this.head = null,
            this.size = 0
      }

      isEmpty(){
            return this.size === 0;
      }
      getSize(){
            return this.size;
      }

      addFirst(value){
            const node = new Node(value)
            if(this.isEmpty()){
                  this.head = node;
            }else{
                  node.next = this.head;
                  this.head = node;
            }
            this.size++
      }


      removeValue(value){
            if(this.isEmpty()){
                  return null;
            }
            if(this.head.value === value){
                  this.head = this.head.next;
                  this.size--;
                  return value;
            }
            else{
                  let prev = this.head;
                  while(prev.next && prev.next.value !== value){
                        prev = prev.next;
                  }
                  if(prev.next){
                    let removeNode = prev.next;
                    prev.next = removeNode.next;
                    this.size--;
                    return value;    
                  }
                  return null
            }
      }
      removeIndex(index){
            if(index < 0 || index > this.size){
                  return null;
            }
            let removeNode;
            if(index === 0){
                  removeNode = this.head;
                  this.head = this.head.next;
                  this.size--;
            }else{
                  let prev = this.head;
                  for(let i=0; i<index.length-1; i++){
                        prev = prev.next
                  }
                  removeNode = prev.next
                   prev.next = removeNode.next
            }
            this.size--;
            return removeNode.value;
      }

}

let ll = new linkedList()
let arr = [1,2,3]
for(let i=0; i<arr.length; i++){
      ll.addFirst(arr[i])
}
// ll.removeValue(2)
ll.removeIndex(2)
console.log(ll);

