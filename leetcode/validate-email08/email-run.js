const validateEmail = require("./validate-email");

const email01 = "correo.ejemplo@dominio.com";

const email02 = "usuario@example.com";

console.log(validateEmail(email01));
console.log(validateEmail(email02));
