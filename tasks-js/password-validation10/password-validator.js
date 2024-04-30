function validationPassword(password) {
  if (password.length < 8) {
    return false;
  }

  const upperCaseCharacter = hasUpperCase(password);
  const lowerCaseCharacter = hasLowerCase(password);
  const hasValidDigit = verifyDigits(password);

  return upperCaseCharacter && lowerCaseCharacter && hasValidDigit;
}

function hasUpperCase(password) {
  return /[A-Z]/.test(password);
}

function hasLowerCase(password) {
  return /[a-z]/.test(password);
}

function verifyDigits(password) {
  return /\d/.test(password);
}

module.exports = validationPassword;
