const maxPrice = require('./max-profit-sell-stock-solution')

test('LeetCode 12: Best Time to sell stock', () => {
  expect(maxPrice([7,1,5,3,6,4])).toEqual(5)
  expect(maxPrice([7,6,4,3,1])).toEqual(0)
})