const log = console.log;

export class Calculator {
  constructor() {
    this.result = 0;
  }

  getSum(x, y) {
    this.result = x + y;

    return this.result;
  }

  getMinus(x, y) {
    this.result = x - y;

    return this.result;
  }

  getMultiply(x, y) {
    this.result = x * y;

    return this.result;
  }

  getDivide(x, y) {
    const checkInput = y !== 0 ? x / y : "Divisão igual a zero.";

    this.result = checkInput

    return this.result
  }
}

const operators = new Calculator();

log(operators.getDivide(50, 0));
