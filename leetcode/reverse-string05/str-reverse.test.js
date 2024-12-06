const reverseStr = require("./str-reverse");

test("Reversing a string", () => {
  expect(reverseStr("ola")).toBe("alo");
  expect(reverseStr("SOU DEV FRONT END")).toBe("DNE TNORF VED UOS");
  expect(reverseStr("NEW YORK")).toBe("KROY WEN");
});
