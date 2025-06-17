// brute force approach
// time complexity O((m+n)log(m+n)) and space complexity O(1)
const mergeSortedArrays = (nums1, m, nums2, n) => {
  for (let i = m; i < m + n; i++) {
    nums1[i] = nums2[i - m];
  }

  return nums1.sort();
};

// console.log(mergeSortedArrays([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
// console.log(mergeSortedArrays([1], 1, [], 0));

// time complexity O(m+n) and space complexity O(m) (nums1 is being copied)
const mergeSortedArrays2 = (nums1, m, nums2, n) => {
  const nums1Copy = nums1.slice(0, m);
  let p1 = 0;
  let p2 = 0;

  for (let i = 0; i < m + n; i++) {
    if (p1 >= m || (p2 < n && nums2[p2] < nums1Copy[p1])) {
      nums1[i] = nums2[p2];
      p2++;
    } else {
      nums1[i] = nums1Copy[p1];
      p1++;
    }
  }
  return nums1;
};

// console.log(mergeSortedArrays([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
// console.log(mergeSortedArrays([1], 1, [], 0));

// time complexity O(m+n) and space complexity O(1)
const mergeSortedArrays3 = (nums1, m, nums2, n) => {
  let p1 = m - 1;
  let p2 = n - 1;

  for (let i = m + n - 1; i > -1; i--) {
    if (p2 < 0) break;

    if (p1 >= 0 && nums1[p1] > nums2[p2]) {
      nums1[i] = nums1[p1];
      p1--;
    } else {
      nums1[i] = nums2[p2];
      p2--;
    }
  }
  return nums1;
};

console.log(mergeSortedArrays([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
console.log(mergeSortedArrays([1], 1, [], 0));
