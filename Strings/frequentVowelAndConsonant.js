// You are given a string s consisting of lowercase English letters ('a' to 'z').

// Find the vowel (one of 'a', 'e', 'i', 'o', or 'u') with the maximum frequency.
// Find the consonant (all other letters excluding vowels) with the maximum frequency.
// Return the sum of the two frequencies.

// Note: If multiple vowels or consonants have the same maximum frequency, you may choose any one of them. If there are no vowels or no consonants in the string, consider their frequency as 0.

// The frequency of a letter x is the number of times it occurs in the string.

const maxFreqSum = (s) => {
  const vowelsSet = new Set(["a", "e", "i", "o", "u"]);
  let vowels = {};
  let consonants = {};

  for (let i = 0; i < s.length; i++) {
    if (vowelsSet.has(s[i])) vowels[s[i]] = (vowels[s[i]] || 0) + 1;
    else consonants[s[i]] = (consonants[s[i]] || 0) + 1;
  }

  const maxVowelCount = Object.values(vowels).reduce(
    (acc, curr) => Math.max(acc, curr),
    0
  );
  const maxConsonantCount = Object.values(consonants).reduce(
    (acc, curr) => Math.max(acc, curr),
    0
  );

  return maxVowelCount + maxConsonantCount;
};

const maxFreqSum2 = (s) => {
  const vowelsSet = new Set(["a", "e", "i", "o", "u"]);
  let obj = {};

  for (let i = 0; i < s.length; i++) {
    obj[s[i]] = (obj[s[i]] || 0) + 1;
  }

  let maxVowel = (maxConsonant = 0);

  for (const letter of Object.keys(obj)) {
    if (vowelsSet.has(letter)) {
      maxVowel = maxVowel > obj[letter] ? maxVowel : obj[letter];
    } else {
      maxConsonant = maxConsonant > obj[letter] ? maxConsonant : obj[letter];
    }
  }

  return maxVowel + maxConsonant;
};
