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

log(operationTest);

module.export = calculator;

// Minha solução, implementando SRP - (Single Responsability Principle)
// export class Calculator {
//   constructor() {
//     this.result = 0;
//   }

//   getSum(x, y) {
//     this.result = x + y;

//     return this.result;
//   }

//   getMinus(x, y) {
//     this.result = x - y;

//     return this.result;
//   }

//   getMultiply(x, y) {
//     this.result = x * y;

//     return this.result;
//   }

//   getDivide(x, y) {
//     const checkInput = y !== 0 ? x / y : "Divisão igual a zero.";

//     this.result = checkInput;

//     return this.result;
//   }
// }

// const operators = new Calculator();

// log(operators.getDivide(50, 0));
