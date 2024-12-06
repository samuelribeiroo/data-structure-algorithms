const validateEmail = require("./validate-email");

test('Testing with a email string is valid', () => {
  expect(validateEmail("usuario@example.com")).toBe(true)
  expect(validateEmail("correo.ejemplo@dominio.com")).toBe(true)
  expect(validateEmail("incorrecto@")).toBe(false)
  expect(validateEmail("otro_correo.com")).toBe(false)
})



  

