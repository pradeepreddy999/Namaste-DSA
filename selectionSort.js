const selectionSort = (arr) => {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let min = i;
    for (let j = i + 1; j < n; j++) if (arr[j] < arr[min]) min = j;

    if (min !== i) [arr[i], arr[min]] = [arr[min], arr[i]];
  }
  return arr;
};

console.log(selectionSort([4, 6, 2, 7, 3, 1, 5]));
