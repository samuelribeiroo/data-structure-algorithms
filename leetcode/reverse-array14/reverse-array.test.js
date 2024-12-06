const reverseArray = require('./reverse-array.js');

test('Reversed a array of numbers', () => {
  expect(reverseArray([1, 20, 32, 9, 3])).toEqual([3, 9, 32,20, 1])
})
