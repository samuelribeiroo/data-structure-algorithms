const log = console.log;

// Solução que passou no teste
function calculator(x, y, operator) {
  let result;

  switch (operator) {
    case "+":
      result = x + y;
      break;

    case "-":
      result = x - y;
      break;

    case "*":
      result = x * y;
      break;

    case "/":
      result = x / y;
      break;
    default:
      throw new Error("Operador selecionado não existe.");
  }

  return result;
}

const operationTest = calculator(10, 25, "*");



module.exports = calculator;

