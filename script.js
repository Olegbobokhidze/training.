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

// third
const oddOrEven = (arr) => {
  const sum = arr.reduce((acc, curr) => acc + curr, 0);
  return sum % 2 === 0 ? "odd" : "even";
};

// fourth

const funcc = () => {
  const charCounts = {};
  word = word.toLowerCase();
  for (let i = 0; i < word.length; i++) {
    const char = word[i];
    if (char in charCounts) {
      charCounts[char]++;
    } else {
      charCounts[char] = 1;
    }
  }

  // Create the output string based on the character counts
  let result = "";
  for (let i = 0; i < word.length; i++) {
    const char = word[i];
    if (charCounts[char] > 1) {
      result += ")";
    } else {
      result += "(";
    }
  }

  return result;
};
