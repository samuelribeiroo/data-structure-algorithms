const power = require("./base-exponent");

test('Exponentiation is a mathematical operation, written as an, involving the base a and an exponent n.', () => {
  expect(power(11,2)).toBe(121)
  expect(power(3,4)).toBe(81)
  expect(power(5,2)).toBe(25)
  expect(power(13,2)).toBe(169)
  expect(power(8,2)).toBe(64)
})