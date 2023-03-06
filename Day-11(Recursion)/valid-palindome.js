// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and 
// removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric 
// characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

 

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.


let s = "A man, a plan, a canal: Panama"
const regex = (str) => /^[a-z0-9]+$/gi.test(str)
const checkPln = (str) => {
    if(str.length <2){
        return true
    }
    let l = str.length
    if(str[0] != str[l-1]){
        return false
    }
    return checkPln(str.slice(1,-1))
}
var isPalindrome = function(s) {
    let newChar = ""
    let l = s.length
    for(let i=0; i<l; i++){
        let ch = s[i].toLowerCase()
        if(regex(ch)){
            newChar += ch
        }
    }
    if(newChar.length < 2){
        return true
    }
    return checkPln(newChar)
};
console.log(isPalindrome(s));