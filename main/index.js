function firstNonRepeated(givenString) {
    // Create an empty object to store character frequencies
    var charCounts = {};
    // Count the frequency of each character in the string
    for (var _i = 0, givenString_1 = givenString; _i < givenString_1.length; _i++) {
        var char = givenString_1[_i];
        charCounts[char] = (charCounts[char] || 0) + 1;
    }
    // Find the first non-repeated character
    for (var _a = 0, givenString_2 = givenString; _a < givenString_2.length; _a++) {
        var char = givenString_2[_a];
        if (charCounts[char] === 1) {
            return char;
        }
    }
    // If no non-repeated character found, return an empty string
    return "";
}
// Testing the function
console.log(firstNonRepeated("hello")); // Output: "h"
console.log(firstNonRepeated("aabcc")); // Output: "b"
console.log(firstNonRepeated("aabbcc")); // Output: ""

// npm install -g typescript
// Compile index.ts to index.js using "tsc index.ts"