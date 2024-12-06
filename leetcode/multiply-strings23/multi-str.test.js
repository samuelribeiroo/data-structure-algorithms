const multiply = require("./multi-str");

test("The input will in string format and the output should be in a string too. Making the multiplication", () => {
  expect(multiply("2", "8")).toBe("16"),
    expect(multiply("123456789", "987654321")).toBe("121932631112635269");
});
