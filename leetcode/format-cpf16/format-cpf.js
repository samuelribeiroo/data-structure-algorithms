const formatCpf = cpf => {
  const formatedString = cpf.split('').join('')
  
  const  isValidCpf = `${formatedString.substring(0, 3)}.${formatedString.substring(3, 6)}.${formatedString.substring(6, 9)}-${formatedString.substring(9,11)}` 


 return isValidCpf
};

module.exports = formatCpf;
