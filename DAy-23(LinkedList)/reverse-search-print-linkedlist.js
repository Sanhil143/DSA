

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
      // add element
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
      // search element
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
      // reverse list
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

      //print all element
      print(){
            if(this.isEmpty()){
                  return "List is empty";
            }
            let curr = this.head;
            let list = "";
            while(curr){
                  list += `${curr.value} `;
                  curr = curr.next;
            }
            return list
      }
}

let ll = new linkedList()
let arr = [22,33,44,55,66]
for(let i=0; i<arr.length; i++){
      ll.addFirst(arr[i])
}
console.log(ll.print()); //66 55 44 33 22 
// console.log(ll.reverseNode() + ll.print()); //[object Object]22 33 44 55 66 
// console.log(ll.reverseNode() + ll.searchNode(1)); //[object Object]-1
