// linear search

const linearSearch = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
};

console.log(linearSearch([5, 3, 4, 6, 0, 7], 4));
console.log(linearSearch([5, 3, 4, 6, 0, 7], 8));
