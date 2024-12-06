const climbStairs = require('./clim-stairs-solution')

test('LeetCode 70: Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?', () => {
  expect(climbStairs(2)).toEqual(2)
  expect(climbStairs(3)).toEqual(3)
})