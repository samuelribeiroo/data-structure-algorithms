const titleCase = require("./title-case");

test('The first character of a string should always return in a capitalized way', () => {
  expect(titleCase('samuel')).toBe('Samuel')
  expect(titleCase('hoje está chovendo')).toBe('Hoje Está Chovendo')
  expect(titleCase('estou apredendo javascript')).toBe('Estou Apredendo Javascript')
})


