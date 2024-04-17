const calculator = require("./calculator");

test("Performing arithmetic operations using the calculator function", () => {
  const num1 = 10;
  const num2 = 5;

  expect(calculator(num1, num2, "+")).toBe(15);
  // expect(calculator(num1, num2, '+')).toBe(15);
});

// expect(calculator(num1, num2, "+")).toBe(12);
// I try run this test 5 times before, the error was in the 'module.export'. It should be 'module.exports'
// Jest doesnt have suppor to new module 'import { Archive Name } from './pathfile. Only accept require'
// Pay attention at folder name. Dont put extension lang like 'Directory.php or js'
