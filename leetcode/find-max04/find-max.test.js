const findMaxNumber = require("./find-max");


test('Finding the maximum number inside an array', () => {
  expect(findMaxNumber([10, 25, 5, 8, 51])).toBe(51)
  expect(findMaxNumber([29, 39, 120, 876])).toBe(876)
  expect(findMaxNumber([89, 1, 35, 43, -5])).toBe(89)
  expect(findMaxNumber([3, -2, -4, -1])).toBe(3)
})

