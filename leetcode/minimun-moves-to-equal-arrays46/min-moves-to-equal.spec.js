const minMoves = require('./min-moves-to-equal')


test('', () => {
  expect(minMoves([1, 2, 3])).toEqual(3)
  expect(minMoves(1,1,1)).toEqual(0)
})