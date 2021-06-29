/*
    Check Permutation: Given two strings, write a method to decide if one is a permutation of the
    other. 
    
    Time Complexity: O(n)
*/


checkPermutations = (stringA, stringB) => {
    if (stringA.length !== stringB.length) {
        return false;
    }

    // Assuming String is Ascii (128 Characters)
    const charHash = new Array(128).fill(0); 

    for (let i = 0; i < stringA.length; i++) {
        const charCode = stringA.charCodeAt(i);
        charHash[charCode]++;
    }

    for (let i = 0; i < stringB.length; i++) {
        const charCode = stringB.charCodeAt(i);
        charHash[charCode]--;
        if (charHash[charCode] < 0) {
            return false;
        }
    }

    return true;
}


const stringA = "Permutations";
const StringB = "timutePnsrao";
console.log(checkPermutations(stringA, StringB));