const removeDuplicates = require("./remove-duplicates");

test("Inside a array the duplicated elemends should be removed", () => {
  expect(removeDuplicates([1, 2, 3, 2, 4, 1, 5])).toEqual([1, 2, 3, 4, 5]);
  expect(removeDuplicates(["apple", "banana", "orange", "banana", "kiwi"])).toEqual(["apple", "banana", "orange", "kiwi"]);
  expect(removeDuplicates([true, true, false, true, false])).toEqual([
    true,
    false,
  ])
});
