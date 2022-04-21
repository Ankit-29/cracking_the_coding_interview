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

def oneEditAway(word1: str, word2: str) -> bool:
    if (abs(len(word1) - len(word2)) > 1):
        return False # Return false if difference in length is greater than 1

    # make smaller string str1
    str1 = word1 if len(word1) < len(word2) else word2
    str2 = word2 if len(word1) < len(word2) else word1

    idx1 = idx2 = 0
    isDifferenceFound = False

    while(idx1 < len(str1) and idx2 < len(str2)):
        if(str1[idx1] != str2[idx2]):
            # return false is more than one difference is found
            if(isDifferenceFound): return False
 
            isDifferenceFound = True

            # when strings have equal length increase idx1
            if(len(str1) == len(str2)): idx1 += 1
        else:
            idx1 += 1

        # longer string's index will always increase
        idx2 += 1

    return True

print(oneEditAway("paie","pie"))
print(oneEditAway("pales","pale"))
print(oneEditAway("pale","bale"))
print(oneEditAway("pale","bake"))