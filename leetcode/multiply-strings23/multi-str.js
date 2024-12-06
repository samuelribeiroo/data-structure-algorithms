// My first solution was that but this solution broke in large scenarios

function mult(str1, str2) {
  let strToNum = +str1 * +str2

  return strToNum.toString()
}

// So my alternative solutions it below and pltaform leetcode accepted and passed in several and highest input cases 

function multiply(num1, num2) {
  let result = BigInt(num1) * BigInt(num2);

  return String(result);
}

module.exports = multiply