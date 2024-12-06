const timeConversion = require("./time-conversion");

test('', () => {
  expect(timeConversion('07:12:56PM')).toBe('19:12:56')
  expect(timeConversion('08:28:34PM')).toBe('20:28:34')
  expect(timeConversion('09:12:15PM')).toBe('21:12:15')
})