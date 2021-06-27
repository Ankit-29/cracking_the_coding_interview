/*
    Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you
    cannot use additional data structures?
    
    Time Complexity: O(n)
*/

// Assuming String is Ascii (128 Characters)

isUnique = (string) => {
    if (string.length > 128) {
        return false;
    }

    let charHash = new Array(128).fill(false);
    for (let i = 0; i < string.length; i++) {
        const charCode = string.charCodeAt(i);
        if (charHash[charCode]) {
            // return false if char already found
            return false;
        }

        // change value to true for newly found character
        charHash[charCode] = true;
    }
    return true;
}


let string = "TestString";
console.log(isUnique(string));
// false