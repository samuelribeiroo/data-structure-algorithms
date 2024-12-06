const formatCpf = require("./format-cpf");

test("The output should be a string formated equal a brazilian social register", () => {
  expect(formatCpf("75613711011")).toBe("756.137.110-11");
  expect(formatCpf("65083562081")).toBe("650.835.620-81");
  expect(formatCpf("39034636046")).toBe("390.346.360-46");
});
