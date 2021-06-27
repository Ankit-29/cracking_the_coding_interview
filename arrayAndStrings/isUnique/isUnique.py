'''
    Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you
    cannot use additional data structures? 
    
    Time Complexity: O(n)
'''

# Assuming String is Ascii (128 Characters)


def isUnique(inpStr: str) -> bool:
    if(len(inpStr) > 128):
        return False

    charHash = [False]*128
    for itr in range(len(inpStr)):
        charCode = ord(inpStr[itr])
        if(charHash[charCode]):
            # return False if character already found
            return False

        # Change value to True for newly found character
        charHash[charCode] = True

    return True


inpStr = "TestString"
print(isUnique(inpStr))
