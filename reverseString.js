// reverse string in-place

const reverseString = (strArr) => {
  for (let i = 0; i < Math.ceil(strArr.length / 2); i++) {
    let temp = strArr[i];
    strArr[i] = strArr[strArr.length - (i + 1)];
    strArr[strArr.length - (i + 1)] = temp;
  }
  return strArr;
};

console.log(reverseString(["h", "e", "l", "l", "o"]));
console.log(reverseString(["H", "a", "n", "n", "a", "h"]));

// this is better in terms of no of iterations because we need not
// do modification for the middle one as it is same for the modification

const reverseString2 = (strArr) => {
  for (let i = 0; i < Math.floor(strArr.length / 2); i++) {
    let temp = strArr[i];
    strArr[i] = strArr[strArr.length - (i + 1)];
    strArr[strArr.length - (i + 1)] = temp;
  }
  return strArr;
};

const reverseString3 = (strArr) => strArr.reverse();
