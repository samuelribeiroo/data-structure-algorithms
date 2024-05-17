const log = console.log;

function camelCase(s) {
  let count = 1;
  for (let index = 0; index < s.length; index++) {
    if (s[index] === s[index].toUpperCase()) {
      count++;
    }
  }

  return count;
}

log(camelCase("oneTwoThree"));

module.exports = camelCase;
