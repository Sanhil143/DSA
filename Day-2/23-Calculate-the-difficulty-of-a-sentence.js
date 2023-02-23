// Calculate the difficulty of a sentence

// Given a string S, find the difficulty of the given string. Here a Word is considered hard
//  if it has 4 consecutive consonants or number of consonants is more than the number of vowels. 
// Else word is easy.Difficulty of the string is defined as 5*(number of hard words) + 3*(number of easy words).

// Input:

//     Difficulty of sentence

//     where:

// First line represents input string S.

// Output:

//      13

// Explanation:

// Hard words = 2(Difficulty and sentence) Easy words = 1(of) So, answer is 5*2+3*1 = 13

let a = "Difficulty of sentence"

const difficulSentence = (a) => {
      let arr = a.toLowerCase().trim().split(' ')
      let easy = 0
      let hard = 0
      for (let str of arr) {
            let c = 0, d = 0, v = 0
            for (let i = 0; i <= str.length; i++) {
                  if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') {
                        v++;
                        if (c < 4) {
                              c = 0;
                        }
                  } else {
                        c++; d++;
                        if (c == 4) {
                              break
                        }
                  }
            }
            if(d>4 || c==4){
                  hard++
            }else{
                  easy++
            }
      }
      console.log(5*hard+3*easy);
      return 5*hard+3*easy
}

difficulSentence(a)