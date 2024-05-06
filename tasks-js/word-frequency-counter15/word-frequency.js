function wordCounter(str) {
  // Como vai ser usado o método map é necessário transformar isso em array (str -> arr). Com isso adicionar a validação de regex que vai verificar apenas palavras, sem pontuação.
  const words = str.toLowerCase().split(/\W+/)

  // Com a string já em array, criamos o método map através do constructor.
  const wordFrequency = new Map() // arr.map(item => return xyz) (Mesma coisa, at all.)

  for (const word of words ) {
    if (word === '') continue

    if (wordFrequency.has(word)) {
      wordFrequency.set(word, wordFrequency.get(word) + 1)
    } else {
      wordFrequency.set(word, 1)
    }
  }

  return wordFrequency
}

module.exports = wordCounter