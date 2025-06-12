const starPattern = (n = 5) => {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 1; j <= n - i; j++) {
      row += j;
    }
    console.log(row);
  }
};

starPattern();

const starPattern2 = (n = 5) => {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      if (j < n - (i + 1)) row += " ";
      else row += "*";
    }
    console.log(row);
  }
};

starPattern2();

const starPatter3 = (n = 5) => {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < i + 1; j++) {
      row += (j + 1) % 2;
    }
    console.log(row);
  }
};

starPatter3();

const starPattern4 = (n = 5) => {
  let toggle = 1;
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < i + 1; j++) {
      row += toggle;
      toggle = toggle === 1 ? 0 : 1;
    }
    console.log(row);
  }
};

starPattern4();
