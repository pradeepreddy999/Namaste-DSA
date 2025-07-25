// We are playing the Guess Game. The game is as follows:

// I pick a number from 1 to n. You have to guess which number I picked.

// Every time you guess wrong,
// I will tell you whether the number I picked is higher or lower than your guess.

// You call a pre-defined API int guess(int num), which returns three possible results:

// -1: Your guess is higher than the number I picked (i.e. num > pick).
// 1: Your guess is lower than the number I picked (i.e. num < pick).
// 0: your guess is equal to the number I picked (i.e. num == pick).
// Return the number that I picked.

const guess = (n) => {
  const pick = 6;
  if (pick === n) return 0;
  else if (pick < n) return -1;
  else return 1;
}; // this is implemented already

const guessNumber = (n) => {
  let l = 1,
    r = n;

  while (l <= r) {
    const m = l + Math.floor((r - l) / 2);
    const g = guess(m);
    if (g === 0) return m;
    else if (g === -1) r = m - 1;
    else l = m + 1;
  }
};
