function titleCase(str) {
  const capitalizeFirst = match => match.toUpperCase();

  const regExStr = str.replace(/\b\w/g, capitalizeFirst);

  return regExStr;
}

module.exports = titleCase
