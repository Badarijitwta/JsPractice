class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
    //To increase the efficiency we can use tail pointer to make insertion easier
    this.tail = null
  }

  append(data) {
    let newNode = new Node(data)
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    }
    //   let current =this.head
    //   while(current.next!==null){
    //    current=current.next
    //   }
    //   current.next=newNode
    this.tail.next = newNode;
    this.tail = newNode;
  }

  insertAtBeginning(data) {
    let newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode
    }
    newNode.next = this.head
    this.head = newNode
  }

  insertAtEnd(data) {
    this.append(data)
  }

  insertAtPosition(data, position) {
    if (position === 0) {
      this.insertAtBeginning(data)
      return;
    }
    let previous = null
    let current = this.head
    let currentIndex = 0

    while (current !== null && currentIndex < position) {
      previous = current;
      current = current.next;
      currentIndex++;
    }

    let newNode = new Node(data)

    if (current === null) {
      this.append(data)
    }
    newNode.next = current
    previous.next = newNode
  }

  reversedList() {
    let previous = null;
    let current = this.head;
    let next = null;
    while (current !== null) {
      next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }
    this.head = previous
  }

  printList() {
    let current = this.head
    while (current !== null) {
      console.log(current.data)
      current = current.next
    }
  }
}

// let myLinkedList= new LinkedList()
// myLinkedList.append(2)
// myLinkedList.append(3)
// myLinkedList.append(4)
// myLinkedList.append(5)
// myLinkedList.printList()
// myLinkedList.reversedList()
// myLinkedList.insertAtBeginning(1)
// myLinkedList.insertAtBeginning(0)
// myLinkedList.insertAtPosition(34,7)
// myLinkedList.printList()
// console.log(myLinkedList)


