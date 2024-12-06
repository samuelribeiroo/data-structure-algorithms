const formatPhoneNumber = number => {
  const phoneNumber = number.join('')
  
  const isFormated = `(${phoneNumber.substring(0,3)}) ${phoneNumber.substring(3,6)} - ${phoneNumber.substring(6)}`

  return  isFormated
}

module.exports = formatPhoneNumber