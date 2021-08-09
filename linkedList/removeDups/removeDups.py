class Node:
    def __init__(self, val=None):
        self.val = val
        self.next = None


class LinkedList:
    def __init__(self):
        self.head = None
        self.lastNode = None

    def append(self, val):
        if(self.lastNode == None):
            self.head = Node(val)
            self.lastNode = self.head
        else:
            self.lastNode.next = Node(val)
            self.lastNode = self.lastNode.next

    def display(self):
        current = self.head
        while(current != None):
            print(current.val)
            current = current.next

    def removeDuplicates(self):
        dupliHash = {}
        current = self.head
        prev = None
        while(current != None):
            if(current.val not in dupliHash):
                dupliHash[current.val] = True
                prev = current
            else:
                prev.next = current.next
            current = current.next

    def removeDuplicatesWithoutBuffer(self):
        current = self.head
        while(current != None):
            runner = current
            while(runner.next != None):
                if(runner.next.val == current.val):
                    runner.next = runner.next.next
                else:
                    runner = runner.next
            
            current = current.next

# DriverCode
data = [1, 2, 3, 9, 4, 5, 6, 7, 8, 1, 9, 10, 1]
linkedList = LinkedList()
for x in data:
    linkedList.append(x)


linkedList.removeDuplicates()
# linkedList.removeDuplicatesWithoutBuffer()

linkedList.display()


'''
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
'''
