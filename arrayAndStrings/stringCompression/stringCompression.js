/*
    Implement a method to perform basic string compression using the counts
    of repeated characters. For example, the string aabcccccaaa would become a2blc5a3, If the
    "compressed" string would not become smaller than the original string, your method should return
    the original string. You can assume the string has only uppercase and lowercase letters (a - z).

*/


stringCompression = (string) => {
    if (string.length == 0) {
        return ""
    }
    resultStringList = new Array(string.length).fill('');
    counter = 1;
    for (let i = 1; i < string.length; i++) {
        if (string[i - 1] === string[i]) {
            counter += 1
        } else {
            resultStringList.push(`${string[i - 1]}${counter}`);
            counter = 1;
        }
    }
    resultStringList.push(`${string[string.length - 1]}${counter}`);
    const resultString = resultStringList.join('').trim();

    return resultString.length < string.length ? resultString : string;

};

string = "abcdefghhh";
console.log(stringCompression(string))
// output: a2blc5a3