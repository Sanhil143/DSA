
// simple print lists


// class Node{
//       constructor(value,next){
//             this.value = value == undefined ? null : value
//             this.next = next == undefined ? null : next
//       }
// }

// const linkedlist = (arr) => {
      
// }
// console.log(linkedlist([2,5,4,7,8,9,6,3]));


class Node{
        constructor(element){
            this.element=element;
            this.next=null;
        }
        insert(data){
        let newnode=new Node(data)
        if(this.head==null) this.head=newnode
        else
        {
            let current=this.head;
            while(current.next!=null){
                    current=current.next;
                }
            current.next=newnode;
        }
        }
        iterate(){
            let current=this.head;
            let result=''
            while(current!=null){
                    result+=current.element+' ';
                    current=current.next;
                }
            return result
        }
        deleteLast(){
            let current=this.head;
            while(current.next.next!=null)
                {
                    current=current.next
                }
            current.next=null;
        }
        
    }

function solution(a,b) {
  //Write your solution here
    if(a<2) return 'no element present';
    let node=new Node();
    let i=0;
    while(i<a)
        {
            node.insert(b[i]);
            i++;
        }
    node.deleteLast();
    let result=node.iterate();
    return result
}


function main() {
    var a = parseInt(readLine());
    var b=readLine().split(' ').map(Number);

    var res = solution(a,b);
    console.log(res);
}