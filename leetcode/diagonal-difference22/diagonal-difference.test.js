const diagonalDifference = require("./diagonal-difference");

test('Given a square matrix, calculate the absolute difference between the sums of its diagonals.', () => {
  expect(diagonalDifference([[1, 2, 3],[4, 5, 6],[9, 8, 9]])).toEqual(2)
  expect(diagonalDifference([[3, 8, 7],[4, 9, 2],[2, 5, 1]])).toEqual(5)
  expect(diagonalDifference([[7, 2, 5],[8, 3, 6],[5, 5, 3]])).toEqual(0)
})
