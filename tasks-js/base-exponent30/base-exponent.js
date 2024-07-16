function power(base, expoent) {
  let result = 1;

  for(let index = 0; index < expoent; index++) {
     result *= base
  }

  return result
}

console.log(power(8,2))

module.exports = power