function power(base, expoent) {
  let result = 1;

  for(let index = 0; index < expoent; index++) {
     result *= base
  }

  return result
}


module.exports = power