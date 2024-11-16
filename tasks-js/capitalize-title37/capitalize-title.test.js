const capitalizeTitle = require('./capitalize-title-solution')

test('Capitalize the string by changing the capitalization of each word such that', () => {
  expect(capitalizeTitle("capiTalIze tHe titLe")).toEqual("Capitalize The Title")
  expect(capitalizeTitle("First leTTeR of EACH Word")).toEqual("First Letter of Each Word")
})