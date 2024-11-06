const findTarget = require('./target-array')

test('Inside a array will be contain certain numbers e the return should be the index target', () => {
  expect(findTarget([10, 20, 30, 40, 50], 30)).toEqual(2)
  expect(findTarget([10, 20, 30], 10)).toEqual(0)
})