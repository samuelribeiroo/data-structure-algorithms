const lengthOfLastWord = require("./length-last.js");

test("Function that receive string in parameter and should return the length of last word.", () => {
  expect(lengthOfLastWord("Hello World")).toEqual(5);
  expect(lengthOfLastWord("fly me   to   the moon")).toEqual(4);
  expect(lengthOfLastWord("luffy is still joyboy")).toEqual(6);
});
