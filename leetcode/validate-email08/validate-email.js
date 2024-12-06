// var patron = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// const log = console.log;

function validateEmail(emailStr) {
  const regExEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  return regExEmail.test(emailStr);
}

const emailTests = [
  "usuario@example.com",
  "correo.ejemplo@dominio.com",
  "incorrecto@",
  "otro_correo.com",
];

const getValidEmails = emailTests.map((email) => {
  const isValid = validateEmail(email);

  return isValid;
});

// log(getValidEmails);

module.exports = validateEmail