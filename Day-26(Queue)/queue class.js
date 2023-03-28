

class Queue {
      constructor(value) {
            this.item = [],
                  this.size = 10;
      }

      addElement(value) { //enqueue
            return this.item.push(value);
      }
      removeElement() { //dequeue
            if (this.item.length > 0) {
                  return this.item.shift();
            }
      }
      peekElement() {
            return this.item[0];
      }
      isEmpty() {
            return this.item === 0;
      }
      isFull() {
            return this.item.length === this.size;
      }
      getSize() {
            return this.size;
      }
      clear() {
            this.item = [];
      }

}

let queue = new Queue()

let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
      queue.addElement(arr[i])
}
console.log(queue.item);

queue.removeElement()
console.log(queue.item);
console.log(queue.peekElement());
console.log(queue.isEmpty());
console.log(queue.isFull());
console.log(queue.getSize());
