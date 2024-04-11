const helloWorld = require("./hello-world.js");

test("Returning 'Hello, World!' as a string", () => {
  const expectedResult = helloWorld();

  expect(expectedResult).toBe('Hello, World!')
});
