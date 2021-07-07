''' 
    One Away: There are three types of edits that can be performed on strings: insert a character,
        remove a character, or replace a character.Given two strings, write a function to check if they are
    one edit(or zero edits) away.
    EXAMPLE
    paie, pie -> true
    pales, pale -> true
    pale, bale -> true
    pale, bake -> false
'''


def oneEditAway(word1: str, word2: str) -> int:
    if (abs(len(word1) - len(word2)) > 1):
        return False

    charHash = [0] * 128
    for char in list(word1):
        charCode = ord(char)
        charHash[charCode] += 1

    for char in list(word2):
        charCode = ord(char)
        charHash[charCode] -= 1 if charHash[charCode] != 0 else 0

    return sum(charHash) <= 1


word1 = "pales"
word2 = "pale"
print(oneEditAway(word1,word2))
# Output: True