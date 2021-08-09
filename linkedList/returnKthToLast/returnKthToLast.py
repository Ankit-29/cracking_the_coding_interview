class Node:
    def __init__(self, val):
        self.val = val
        self.next = None


class LinkedList:
    def __init__(self):
        self.head = None
        self.lastNode = None
        self.length = 0

    def append(self, val):
        if(self.lastNode == None):
            self.head = Node(val)
            self.lastNode = self.head
        else:
            self.lastNode.next = Node(val)
            self.lastNode = self.lastNode.next

        self.length += 1

    def display(self):
        current = self.head
        while(current != None):
            print(current.val, end=" -> ")
            current = current.next
        print()

    def getLength(self):
        return self.length

    def getKthToTheLast(self, k):
        current = self.head
        l = 0
        while(current != None):
            if(l == self.getLength()-k):
                return current.val
            l += 1
            current = current.next


# DriverCode
data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
linkedList = LinkedList()
for x in data:
    linkedList.append(x)

linkedList.display()
print(linkedList.getKthToTheLast(4))

'''
    Output 
    7
'''
