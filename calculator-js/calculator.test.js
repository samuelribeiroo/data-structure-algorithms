import { Calculator } from "./calculator";

test("Performing arithmetic operations using the calculator function", () => {
  const firstInput = 10;
  const secondInput = 5;
  
  expect(Calculator(num, num2, getSum(firstInput, secondInput))).toBe(15);
});

// expect(calculator(num1, num2, "+")).toBe(12);
