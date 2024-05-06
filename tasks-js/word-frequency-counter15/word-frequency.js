function wordCounter(str) {
  // Como vai ser usado o método map é necessário transformar isso em array (str -> arr(ARR = OBJECT)). Com isso adicionar a validação de regex que vai verificar apenas palavras, sem pontuação.
  const words = str.toLowerCase().split(/\W+/)

  // Com a string já em array, criamos o método map através do constructor.
  const wordFrequency = new Map() // Object que permite usar o for of 

  // For (index do array)
  for (const word of words ) {
    // Se for vazio, continue a validação.
    if (word === '') continue

    // Se dentro do objeto conter o parametro da funcção (Verificado com metódo has. str now is words line 3)
    if (wordFrequency.has(word)) {
     // set = [0] -> get [1], [2], [3] etc... ( + 1 )
      wordFrequency.set(word, wordFrequency.get(word) + 1)
      // wordFrequency.set(palavra já encontrada, opa encontramos denovo (get) então faça a soma dela)
    } else {
      wordFrequency.set(word, 1)
      // wordFrequency.set(opa, palavra pela primeira vez)
    }
  }

  return wordFrequency
}

module.exports = wordCounter