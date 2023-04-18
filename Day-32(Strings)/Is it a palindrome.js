// Is it a palindrome?

// Write a function that checks if a given string (case insensitive) is a palindrome.


// const { assert } = require('chai');
// describe("Fixed tests", function() {
//   it("Testing for 'a'", () => assert.strictEqual(isPalindrome("a"), true));
//   it("Testing for 'aba'", () => assert.strictEqual(isPalindrome("aba"), true));
//   it("Testing for 'Abba'", () => assert.strictEqual(isPalindrome("Abba"), true));
//   it("Testing for 'hello'", () => assert.strictEqual(isPalindrome("hello"), false));
//   it("Testing for 'Bob'", () => assert.strictEqual(isPalindrome("Bob"), true));
//   it("Testing for 'Madam'", () => assert.strictEqual(isPalindrome("Madam"), true));
//   it("Testing for 'AbBa'", () => assert.strictEqual(isPalindrome("AbBa"), true));
//   it("Testing for ''", () => assert.strictEqual(isPalindrome(""), true));
// });

// let x = 'AbBa'
let x = 'hello'


const isPalindrome = (x) => {
      let str = x.toLowerCase();
      return isPal(str);
}

// Recursive func
const isPal = (str) => {
      if (str.length <= 1) {
            return true;
      }
      if (str[0] === str.slice(-1)) {
            return isPal(str.slice(1, -1));
      } else {
            return false;
      }
}
console.log(isPalindrome(x))