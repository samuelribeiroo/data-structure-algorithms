const quickSort = require("./quick-sort");

test("Ordering a numeric list asceding order", () => {
  expect(quickSort([10, 5, 8, 2, 7, 1, 9, 3, 6, 4])).toEqual([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  ]);
});
