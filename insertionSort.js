const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    const curr = arr[i];
    let prev = i - 1;
    while (arr[prev] > curr) {
      arr[prev + 1] = arr[prev];
      prev--;
    }
    arr[prev + 1] = curr;
  }
  return arr;
};

console.log(insertionSort([4, 2, 7, 3, 1, 5]));
console.log(insertionSort([4, 3, 7, 5, 2, 1]));
