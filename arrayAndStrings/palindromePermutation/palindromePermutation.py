'''
    Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palindrome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation
    is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.

    Time Complexity: O(n)
'''


def palindromePermutation(string: str) -> bool:
    charHash = [0]*128
    oddCount = 0
    for char in string:
        charCode = ord(char)
        charHash[charCode] += 1
        if(charHash[charCode] % 2 == 0):
            oddCount -= 1
        else:
            oddCount += 1
        
    return oddCount <= 1


string = "niint"
print(palindromePermutation(string))
# Output: True