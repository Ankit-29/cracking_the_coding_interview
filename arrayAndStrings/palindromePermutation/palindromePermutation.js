/*
    Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palindrome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation
    is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.

    Time Complexity: O(n)
*/

isPalindromePermutations = (string) => {
    charHash = new Array(128).fill(0);
    oddCount = 0;
    string.split('').forEach((char) => {
        charCode = char.charCodeAt(0);
        charHash[charCode]++;
        if(charHash[charCode] % 2 !== 0) {
            oddCount++;
        } else {
            oddCount--;
        }
    });

    return oddCount <= 1;
}

const string = "nniti"
console.log(isPalindromePermutations(string));
// Output: true