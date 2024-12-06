const adjacentElementsProduct = require('./maximum-product-solution')

test('', () => {
  expect(adjacentElementsProduct([3, 6, -2, -5, 7, 3])).toEqual(21)
  expect(adjacentElementsProduct([5, 6, -4, 2, 3, 2, -23])).toEqual(30)
  expect(adjacentElementsProduct([5, 1, 2, 3, 1, 4])).toEqual(6)
})