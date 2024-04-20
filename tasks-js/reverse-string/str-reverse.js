function reverseStr(str) {
  const setArr = str.split('').reverse();

  const isString = setArr.join('').toString();

  return isString;
}

// console.log(reverseStr("Hello"));

module.exports = reverseStr;
