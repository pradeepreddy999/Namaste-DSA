// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters.
// No two characters may map to the same character, but a character may map to itself.

const isIsomorphic = (s, t) => {
  if (s.length !== t.length) return false;

  let map = {};
  for (let i = 0; i < s.length; i++) {
    if (!map[s[i]] && !Object.values(map).some((x) => x === t[i]))
      map[s[i]] = t[i];
    else if (map[s[i]] !== t[i]) return false;
  }
  return true;
};

const isIsomorphic2 = (s, t) => {
  if (s.length !== t.length) return false;

  let mapStoT = {};
  let mapTtoS = {};
  for (let i = 0; i < s.length; i++) {
    if (!mapStoT[s[i]] && !mapTtoS[t[i]]) {
      mapStoT[s[i]] = t[i];
      mapTtoS[t[i]] = s[i];
    } else if (mapStoT[s[i]] !== t[i] || mapTtoS[t[i]] !== s[i]) {
      return false;
    }
  }
  return true;
};
