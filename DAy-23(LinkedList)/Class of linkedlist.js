



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
            this.size++
      }

}

let ll = new LinkedList()
ll.addFirst(7)
ll.addLast(27)
console.log(ll);
// console.log(ll.isEmpty());
// console.log(ll.getSize());

