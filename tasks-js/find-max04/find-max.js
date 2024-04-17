const log = console.log;

// 1. Tratamento dos dados: Checar se o dado de input é um array, caso não lançar a mensagem de erro.
// 2. Utilizando o método 'Math.max()' retorne o maior número.

function findMaxNumber(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new Error("Input deve ser um array diferente de vazio.");
  }

  const isMax = Math.max(...arr);

  return isMax;
}

const errorCheck = 'Sou um array 👱‍♂️' //  Error checking, its working ✔
const randomNumber = [10, 20, 30, 580];


module.exports = findMaxNumber
