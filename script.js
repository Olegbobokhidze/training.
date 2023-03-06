"use strict";

// first

const funcOperation = (operation, value1, value2) => {
  console.log(eval(`${value1} ${operation} ${value2}`));
};
funcOperation("/", 15, 10);

// second

const sum = (arr) => {
  return arr
    ? arr
        .sort((x, y) => x - y)
        .slice(1, -1)
        .reduce((s, e) => s + e, 0)
    : 0;
};
sum([1, 2, 3, 5, 6]);
