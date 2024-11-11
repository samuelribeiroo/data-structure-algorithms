const compose = require('./function-composition-solution')

test('LeetCode 2629: return a new function fn that is the function composition of the array of functions.', () => {
  const fn = compose([x => x + 1, x => 2 * x])

  const result = fn(4)
  expect(result).toEqual(9)
})