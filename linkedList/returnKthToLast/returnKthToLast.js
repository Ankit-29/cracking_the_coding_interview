class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.lastNode = null;
        this.length = 0;
    }

    append(val) {
        if (this.lastNode == null) {
            this.head = new Node(val);
            this.lastNode = this.head;
        } else {
            this.lastNode.next = new Node(val);
            this.lastNode = this.lastNode.next;
        }
        this.length++;
    }

    display() {
        let current = this.head;
        while (current !== null) {
            console.log(current.val);
            current = current.next;
        }
    }

    getKthToLast(k) {
        let current = this.head;
        let idx = 0;
        while (current !== null) {
            if (idx === this.length - k) {
                return current.val;
            }
            idx++;
            current = current.next;
        }
    }
}



// DriverCode
data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
linkedList = new LinkedList()
data.forEach(val => {
    linkedList.append(val);
});

console.log(linkedList.getKthToLast(4))

/*
    Output
    7
*/