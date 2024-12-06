const sortPeople = require('./sort-people')

test('Ordening array in a descending order', () => {
  expect(sortPeople(["Mary","John","Emma"], [180,165,170])).toEqual(["Mary","Emma","John"])
  expect(sortPeople(["Alice","Bob","Bob"], [155,185,150])).toEqual(["Bob","Alice","Bob"])
})