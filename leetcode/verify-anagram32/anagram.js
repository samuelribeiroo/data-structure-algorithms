function anagramVerifier(word1, word2) {
  word1 = word1.replace('(/\s+/g', '').toLowerCase()
  word2 = word2.replace('(/\s+/g', '').toLowerCase()

  if (word1.length !== word2.length) {
    return false
  }

  // str -> substrings dentro de um array -> sort ordenas alfabeticamente -> transforma numa string só e faz a verificação (=== -> true or false)
  return word1.split('').sort().join('') === word2.split('').sort().join('')
}

module.exports = anagramVerifier