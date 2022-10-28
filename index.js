function isPalindrome(word) {
  for (let startIndex = 0; startIndex < word.length / 2; startIndex++) {
    const endIndex = word.length - 1 - startIndex;
    if (word[startIndex] != word[endIndex]) return false;
  }
  return true;
}

/* 
  Pseudocode:

  Reverse the word by splitting each letter to an array, reverse the array, then join it
  Check if the reversed word === the word
  Return boolean
*/

/*
  Explanation:

  A word is palindrome if it is equal the reversed version of it
  By reversing a word and checking if they are both equal, we can tell if it is palindrome
  word.split("") allows us to create an area containing each character as an entry and allows us to use array methods to reverse this array
  word.join("") reform a string from the array of letter
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("/w/giig/w/"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("trauma"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
