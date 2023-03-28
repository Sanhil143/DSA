

//Program to implement stack data structure

class Stack {
      constructor(){
            this.item = [];
            this.maxSize = 5;
      }

      //creating function

      //Add element on stack
      add(element){
            return this.item.push(element);
      }

      //Remove element from the stack
      remove(){
            if(this.item.length>0){
                  return this.item.pop()
            }
      }
      //View the last element
      peek(){
            return this.item[this.item.length-1]
      }
      //Check stack is empty
      isEmpty(){
            return this.item.length == 0
      }
      //check stack is full
      isFull(){
            return this.item.length == this.maxSize
      }
      //Check size of out stack
      size(){
            return this.item.length
      }
      //empty ths stack
      clear(){
           return this.item = []
      }
}


let stack = new Stack()
let arr = [1,2,3,4,5]
for(let i=0; i<arr.length; i++){
      stack.add(arr[i])
}
console.log(stack);
console.log(stack.remove());
console.log(stack.isFull());
console.log(stack.isEmpty());
console.log(stack.item);
console.log(stack.peek());
console.log(stack.size());
console.log(stack.clear());

