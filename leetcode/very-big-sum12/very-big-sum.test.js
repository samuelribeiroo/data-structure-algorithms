const aVeryBigSum = require("./very-big-sum");

test("Adding a huge numbers with more than 7 digits", () => {
  expect(aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005])).toBe(5000000015);
});
