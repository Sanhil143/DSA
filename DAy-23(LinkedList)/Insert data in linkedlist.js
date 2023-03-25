// inserting data on linked list



class Node {
      constructor(value) {
            this.value = value;
            this.next = null;
      }
}

class LinkedList {
      constructor(){
            this.head = null;
            this.size = 0
      }

      isEmpty(){
            return this.size === 0;
      }

      //check size
      getSize(){
            return this.size;
      }

      //Add element in start of node
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
      //Add element in end of node
      addLast(value){
            const node = new Node(value)
            if(this.isEmpty()){
                  this.head = node;
            }else{
                  let lastNode = this.head;
                  while(lastNode.next){
                        lastNode = lastNode.next;
                  }
                  lastNode.next = node;
            }
            this.size++;
      }
      //Add element on the basis of index
      addMid(value,index){
            if(index < 0 || index > this.size){
                  return;
            }
            if(index === 0){
                  this.addFirst(value);
            }
            const node = new Node(value);
            let prev = this.head;
            for(let i=0; i<index-1; i++){
                  prev = prev.next;
            }
            node.next = prev.next;
            prev.next = node;
            this.size++
      }


}

let ll = new LinkedList()
ll.addFirst(7)
ll.addLast(27)
ll.addLast(77)
ll.addMid(17,1)
ll.addMid(27,2)
console.log(ll);
// console.log(ll.isEmpty());
// console.log(ll.getSize());
