'''
    Implement a method to perform basic string compression using the counts
    of repeated characters. For example, the string aabcccccaaa would become a2blc5a3, If the
    "compressed" string would not become smaller than the original string, your method should return
    the original string. You can assume the string has only uppercase and lowercase letters (a - z).

'''


def stringCompression(string: str) -> str:
    if(len(string) == 0):
        return ""

    resultStringList = ['']*len(string)
    counter = 1
    for x in range(1, len(string)):
        if string[x-1] == string[x]:
            counter += 1
        else:
            resultStringList.append('{}{}'.format(string[x-1], counter))
            counter = 1

    resultStringList.append('{}{}'.format(string[len(string)-1], counter))
    resultString = "".join(resultStringList).strip()

    return resultString if len(resultString) < len(string) else string


string = "aabcccccaaa"
print(stringCompression(string))
# output: a2blc5a3