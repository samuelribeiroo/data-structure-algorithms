const catsAndMouse = require("./cats-mouse");

test("", () => {
  expect(catsAndMouse(1, 2, 3)).toBe("Cat B");
  expect(catsAndMouse(1, 3, 2)).toBe("Mouse C");
  expect(catsAndMouse(8, 2, 5)).toBe("Mouse C");
});
