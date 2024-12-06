function diagonalDifference(arr) {
  let axisLeft = 0;
  let axisRight = 0;

  for (let index = 0; index < arr.length; index++) {
    axisLeft += arr[index][index];
    axisRight += arr[index][arr.length - 1 - index];
  }

  const getFinalResult = Math.abs(axisLeft - axisRight);

  return getFinalResult;
}

diagonalDifference([
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
]);


module.exports = diagonalDifference;
