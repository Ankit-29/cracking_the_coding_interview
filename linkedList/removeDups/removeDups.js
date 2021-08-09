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
    }

    append(val) {
        if (this.lastNode === null) {
            this.head = new Node(val);
            this.lastNode = this.head;
        } else {
            this.lastNode.next = new Node(val);
            this.lastNode = this.lastNode.next;
        }
    }

    display() {
        let current = this.head;
        while (current !== null) {
            console.log(current.val);
            current = current.next;
        }
    }

    removeDuplicates() {
        const dupliHash = {};
        let current = this.head;
        let prev = null;
        while (current !== null) {
            if (!dupliHash[current.val]) {
                prev = current;
                dupliHash[current.val] = true;
            } else {
                prev.next = current.next;
            }
            current = current.next;
        }
    }

    removeDuplicatesWithoutBuffer() {
        let current = this.head;
        while (current !== null) {
            let runner = current;
            while (runner.next !== null) {
                if (runner.next.val === current.val) {
                    runner.next = runner.next.next;
                } else {
                    runner = runner.next;
                }
            }
            current = current.next;
        }
    }
}



// DriverCode
data = [1, 2, 3, 9, 4, 5, 6, 7, 8, 1, 9, 10, 1]
linkedList = new LinkedList()
data.forEach(val => {
    linkedList.append(val);
});


linkedList.removeDuplicates()
// linkedList.removeDuplicatesWithoutBuffer()

linkedList.display()


/*
    Output
    --------------------------------
    1
    2
    3
    9
    4
    5
    6
    7
    8
    10
*/