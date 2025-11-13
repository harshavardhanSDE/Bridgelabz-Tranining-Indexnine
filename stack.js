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