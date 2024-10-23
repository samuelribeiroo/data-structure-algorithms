const anagramVerifier = require('./anagram.js')

test('Anagram Word Verifier', () => {
  expect(anagramVerifier('AMOR', 'ROMA')).toBe(true)
  expect(anagramVerifier('JOSUÉ', 'BARCELONA')).toBe(false)
})