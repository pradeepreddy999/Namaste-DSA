// You are given a 0-indexed array of strings words and a character x.
// Return an array of indices representing the words that contain the character x.
// Note that the returned array may be in any order.

// m - no of words
// n - max length of a word
// k - no of indices matching x
// Time Complexity O(m*n)
// Space Complexity O(k)

const findWordsContaining = (words, x) => {
  let result = [];
  for (let i = 0; i < words.length; i++) {
    // if(words[i].includes(x)) result.push(i);

    for (let j = 0; j < words[i].length; j++) {
      if (words[i][j] === x) {
        result.push(i);
        break;
      }
    }
  }

  return result;
};
