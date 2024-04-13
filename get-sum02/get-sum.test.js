// Explain the code below

// Importing the file .js 
const getSum = require("./get-sum.js");

// Describing to jest how it should be tested
test("Calculating the sum of two numbers", () => {
  // Testing inputs
  let num1 = 10;
  let num2 = 10;

  // Call the func
  const getResult = getSum(num1, num2);

  expect(getResult).toBe(20);
});
