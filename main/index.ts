function firstNonRepeated(givenString: String) {
    // Create an empty object to store character frequencies
    const charCounts = {};
  
    // Count the frequency of each character in the string
    for (let char of givenString) {
      charCounts[char] = (charCounts[char] || 0) + 1;
    }
  
    // Find the first non-repeated character
    for (let char of givenString) {
      if (charCounts[char] === 1) {
        return char;
      }
    }
  
    // If no non-repeated character found, return an empty string
    return "";
}
  
// Testing the function
console.log(firstNonRepeated("hello"));    // Output: "h"
console.log(firstNonRepeated("aabcc"));    // Output: "b"
console.log(firstNonRepeated("aabbcc"));   // Output: ""

// npm install -g typescript
// Compile index.ts to index.js using "tsc index.ts"