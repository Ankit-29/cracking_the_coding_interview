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
        return False
    }

    charHash = new Array(128).fill(0);
    for (let i = 0; i < word1.length; i++) {
        charCode = word1.charCodeAt(i);
        charHash[charCode] += 1;
    }

    for (let i = 0; i < word2.length; i++) {
        charCode = word2.charCodeAt(i);
        charHash[charCode] -= charHash[charCode] != 0 ? 1 : 0;
    }
    
    return charHash.reduce((x, y) => x + y) <= 1;
};

const word1 = "pales";
const word2 = "pale";
console.log(oneEditAway(word1, word2))
// Output: true