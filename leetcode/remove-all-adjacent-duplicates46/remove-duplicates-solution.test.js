const removeDuplicates = require('./remove-duplicates-solution')

test('You are given a string s consisting of lowercase English letters. A duplicate removal consists of choosing two adjacent and equal letters and removing them.', () => {
  expect(removeDuplicates('abbaca')).toEqual('ca')
})