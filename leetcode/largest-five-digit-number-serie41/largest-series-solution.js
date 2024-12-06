let solution = digits => {
  let maxNum = 0

  for (let index = 0; index < digits.length; index++) {
    let num = +digits.substring(index, index + 5)
  
    if (num > maxNum) {
      maxNum = num;
    }
    
  }

  return maxNum;
}

/*   

A função deve devolver a maior sequencia de 5 números encontrados na string.

A inicialização se dá com a variável maxNum=0 (ela vai armazenar o maior número encontrado a cada iteração)

O loop for vai percorrer cada elemento da string fazendo a extração de cinco digitos

a cada extração será feita a comparação com a variável de incializiação maxNum e numa condicional fazemos a comparação e atribuição de novo valor.

Ao final é atualizada e retorna o valor.

digits = "123456"

index = 0: digits.substring(0, 5) = "12345". Converte para número: 12345

12345 > 0 → Atualiza maxNum = 12345.

index = 1: digits.substring(1, 6) = "23456". Converte para número: 23456.

23456 > 12345 → Atualiza maxNum = 23456.

Resultado final: maxNum = 23456.

*/