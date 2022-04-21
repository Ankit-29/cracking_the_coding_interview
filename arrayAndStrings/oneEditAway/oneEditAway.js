/* 
    One Away: There are three types of edits that can be performed on strings: insert a character,
        remove a character, or replace a character.Given two strings, write a function to check if they are
    one edit(or zero edits) away.
    EXAMPLE
    paie, pie -> true
    pales, pale -> true
    pale, bale -> true
    pale, bake -> false
*/


oneEditAway = (word1, word2) => {
    if (Math.abs(word1.length - word2.length) > 1) {
        return false; // Return false if difference in length is greater than 1
    }

    // make smaller string str1
    const str1 = word1.length < word2.length ? word1 : word2;
    const str2 = word1.length < word2.length ? word2 : word1;

    let idx1 = 0, idx2 = 0;
    let isDifferenceFound = false;

    while (idx1 < str1.length && idx2 < str2.length) {
        if (str1[idx1] != str2[idx2]) {
            // return false is more than one difference is found
            if (isDifferenceFound) return false;

            isDifferenceFound = true;

            // when strings have equal length increase idx1
            if (str1.length === str2.length) idx1++;
        } else {
            idx1++;
        }
        // longer string's index will always increase
        idx2++;
    }
    return true;

};

console.log(oneEditAway("paie", "pie"));
console.log(oneEditAway("pales", "pale"));
console.log(oneEditAway("pale", "bale"));
console.log(oneEditAway("pale", "bake"));