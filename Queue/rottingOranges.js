// You are given an m x n grid where each cell can have one of three values:

// 0 representing an empty cell,
// 1 representing a fresh orange, or
// 2 representing a rotten orange.
// Every minute, any fresh orange that is 4-directionally
// adjacent to a rotten orange becomes rotten.

// Return the minimum number of minutes that must elapse until
// no cell has a fresh orange. If this is impossible, return -1.

const orangesRotting = (grid) => {
  const m = grid.length;
  const n = grid[0].length;

  const queue = [];
  // first add rotten to queue;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 2) queue.push([i, j]);
    }
  }

  let minutes = 0;
  let rottenLen = queue.length;
  // mark adj nodes as rotten and push into queue untill it's empty
  while (queue.length) {
    const [rX, rY] = queue.shift();

    [
      [-1, 0],
      [0, -1],
      [0, 1],
      [1, 0],
    ].forEach(([i, j]) => {
      const rowInd = rX + i;
      const colInd = rY + j;
      if (
        rowInd > -1 &&
        rowInd < m &&
        colInd > -1 &&
        colInd < n &&
        grid[rowInd][colInd] === 1
      ) {
        queue.push([rowInd, colInd]);
        grid[rowInd][colInd] = 2;
      }
    });

    rottenLen--;

    if (rottenLen === 0 && queue.length > 0) {
      minutes++;
      rottenLen = queue.length;
    }
  }

  // traverse the grid to check if any orange is fresh
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) return -1;
    }
  }

  return minutes;
};
