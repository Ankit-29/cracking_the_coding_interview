'''
    Check Permutation: Given two strings, write a method to decide if one is a permutation of the
    other. 
    
    Time Complexity: O(n)
'''


def checkPermutation(stringA: str, stringB: str) -> bool:
    if(len(stringA) != len(stringB)):
        return False

    charHash = [0]*128  # Assuming String is Ascii (128 Characters)

    for char in stringA:
        charHash[ord(char)] += 1

    for char in stringB:
        charHash[ord(char)] -= 1
        if(charHash[ord(char)] < 0):
            return False

    return True


stringA = "Permutations"
StringB = "timutePnsrao"
print(checkPermutation(stringA, StringB))
