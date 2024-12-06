const mergeSort = require('./merge-sort.solution');

test('Applying MergeSort Algorithm', () => {
  expect(mergeSort([58, 25, 12, 3, 6, 19, 88])).toEqual([3,  6, 12, 19, 25, 58, 88])
})