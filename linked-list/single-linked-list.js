class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}


class SinglyLinkedList {
    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0;
    }

    push(val){

        var newNode = new Node(val);
        if(!this.head){
            this.head= newNode;
            this.tail = this.head;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++
        return this
    }
}
// var first = new Node("Go hiking")
// first.next = new Node("Cook pasta")
// first.next.next = new Node("Drink juice")

const list = new SinglyLinkedList()

list.push("hello")
list.push("world")
list.push(42)

console.log(list)
