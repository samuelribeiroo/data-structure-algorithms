const sortedSquared = require("./squared-ordened");

test("Return a new array with the squared numbers ordered in ascending order", () => {
  expect(sortedSquared([-4, -1, 0, 3, 10])).toEqual([0, 1, 9, 16, 100]);
});

test("Return a new array with the squared numbers ordered in ascending order", () => {
  expect(sortedSquared([-7, -3, 2, 3, 11])).toEqual([4, 9, 9, 49, 121]);
});

test("Return a new array with the squared numbers ordered in ascending order", () => {
  expect(sortedSquared([-1])).toEqual([1]);
});
