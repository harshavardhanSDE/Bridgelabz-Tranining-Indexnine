// LINKED_LIST

class node {
    constructor(data) {
        this.data = data;
        this.next = null ;
    }

};


const head = new node(10);
head.next = new node(20);
head.next.next = new node(30);

function insertAtFirst(data, headNode) {
    const currentNode = new node(data);
    currentNode.next = headNode
    return currentNode;
}

const nodeAtFirst = insertAtFirst(100, head)
const nodeAtFirstSecond = insertAtFirst(200, nodeAtFirst)


// insert at middle

function insertAtMiddle(target, data, head){

    const newNode = new node(data);
    let temp = head;
    while ( temp.data != target ){
        temp = temp.next;
    }

    newNode.next = temp.next;
    temp.next = newNode;
    return head

}

function insertAtEnd(data, head) {
    let temp = head;
    while ( temp.next != null){
        temp = temp.next;
    }

    const newNode = new node(data);
    temp.next = newNode;

    return head;


}

insertAtMiddle(20, 5000, nodeAtFirstSecond);
insertAtEnd(4890, nodeAtFirstSecond);
insertAtEnd(9089, nodeAtFirstSecond);


let temp = nodeAtFirstSecond;
while ( temp !== null) {
    console.log(temp.data);
    temp = temp.next;
}