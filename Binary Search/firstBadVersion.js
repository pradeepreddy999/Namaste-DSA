// You are a product manager and currently leading a team to develop a new product.
// Unfortunately, the latest version of your product fails the quality check.
// Since each version is developed based on the previous version,
// all the versions after a bad version are also bad.

// Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one,
// which causes all the following ones to be bad.

// You are given an API bool isBadVersion(version) which returns whether version is bad.
// Implement a function to find the first bad version. You should minimize the number of calls to the API.

const solution = (isBadVersion) => {
  return function (n) {
    let l = 1,
      r = n;
    while (l < r) {
      const m = l + Math.floor((r - l) / 2);

      if (isBadVersion(m)) r = m;
      else l = m + 1;
    }
    return r;
  };
};
