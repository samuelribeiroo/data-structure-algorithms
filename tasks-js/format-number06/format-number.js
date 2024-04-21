const formatPhoneNumber = number => {
  const phoneNumber = number.join('')
  
  const isFormated = `(${phoneNumber.substring(0,3)}) ${phoneNumber.substring(3,6)} - ${phoneNumber.substring(6)}`

  return  isFormated
}

console.log(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9]))
console.log(formatPhoneNumber([7, 2, 8, 1, 6, 3, 9, 0, 5, 4]))
console.log(formatPhoneNumber([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]))
console.log(formatPhoneNumber([ 7, 8, 5, 6, 3, 4, 1, 2, 9, 0]))

