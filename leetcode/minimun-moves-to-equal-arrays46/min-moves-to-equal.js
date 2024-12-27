/**
 * @param {number[]} nums
 * @return {number}
 */

function minMoves(arr) {
  if (arr.length === 0) return arr;

  const mins = Math.min(...arr);
  let sum = 0;

  for (let index = 0; index < arr.length; index++) {
    sum += arr[index] - mins;
  }

  return sum;
}

const result = minMoves([1, 2, 3]);

console.log(result);

module.exports = minMoves;
