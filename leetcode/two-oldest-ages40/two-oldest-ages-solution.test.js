const twoOldestAges = require('./two-oldest-ages-solution')

test(' It should take an array of numbers as its argument and return the two highest numbers within the array', () => {
  expect(twoOldestAges([1, 2, 10, 8])).toEqual([8, 10])
  expect(twoOldestAges([1, 3, 10, 0])).toEqual([3, 10])
  expect(twoOldestAges([1, 5, 87, 45, 8, 8])).toEqual([45, 87])
})

