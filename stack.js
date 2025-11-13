// stack implementing using array

class Stack {
    constructor (cap) {
        this.capacity = cap;
        this.stack = new Array(cap);
        this.top = -1;
    }

    push(val){
        // checking if the stack if full;
        if ( this.top == this.capacity - 1) {
            console.log("The stack if full");
        }
        this.stack[++this.top] = val;
    }

    pop(){
        if ( this.top == -1) {
            console.log("The stack is empty");
        }
        this.stack[--this.top];
    }

    peek() {
        if ( this.top == -1) {
            console.log("The stack is empty");
        }
        console.log(this.stack[this.top]);
    }
}

let newStack = new Stack(10);
newStack.push(1);
newStack.push(2);



newStack.pop();
newStack.peek();


// stack using linked list

class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}

class Stack {
    top = null;
    constructor(){}

    push(val) {
        const temp = new Node(val);
        // important, since every newly added node is the top node.
        temp.next = this.top;
        this.top = temp;
        return this.top;
    }

    pop() {
        if ( this.top == null) {console.log("stack is empty"); return -1};
        let temp = this.top;
        this.top = this.top.next;
        let val = temp.data;

        temp = null;

        console.log(val);
    }
}

let newstack = new Stack()
newstack.push(10);
newstack.push(23);
newstack.pop()
newstack.pop()
newstack.pop()
