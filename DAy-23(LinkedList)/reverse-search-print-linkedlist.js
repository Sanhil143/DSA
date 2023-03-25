

class Node {
      constructor(value) {
            this.value = value,
                  this.next = null;
      }
}
class linkedList {
      constructor() {
            this.head = null,
                  this.size = 0;
      }

      isEmpty() {
            return this.head === 0;
      }
      getSize() {
            return this.size;
      }
      addFirst(value) {
            let node = new Node(value);
            if (this.isEmpty()) {
                  this.head = node;
            } else {
                  node.next = this.head;
                  this.head = node;
            }
            this.size++
      }
      searchNode(value) {
            if (this.isEmpty()) {
                  return -1;
            }
            let i = 1;
            let curr = this.head;
            while (curr) {
                  if (curr.value === value) {
                        return i;
                  }
                  curr = curr.next;
                  i++;
            }
            return -1;
      }
      reverseNode(){
            let prev = null;
            let curr = this.head;
            while(curr){
                  let next = curr.next;
                  curr.next = prev;
                  prev = curr;
                  curr = next;
            }
           return this.head = prev;
      }
}

let ll = new linkedList()
let arr = [1,2,3,4,5]
for(let i=0; i<arr.length; i++){
      ll.addFirst(arr[i])
}
ll.reverseNode();
console.log(ll.searchNode(1));
