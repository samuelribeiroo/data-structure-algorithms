const camelCase = require("./camel-case");

test('Making counting all of words inside a unique string', () => {
  expect(camelCase('saveChangesInTheEditor')).toBe(5)
  expect(camelCase('oneTwoThree')).toBe(3)  
})
