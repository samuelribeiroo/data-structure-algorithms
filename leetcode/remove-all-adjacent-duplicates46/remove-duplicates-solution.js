function removeDuplicates(text) {
  if (text === null) return text

  let index = 0;

  let arr = text.split('')

  for (let j = 0; j < arr.length; j++) {
    if (index > 0 && arr[index - 1] === arr[j]) {
      index--
    } else {
      arr[index] = arr[j]
      index++
    }
  }

  return arr.slice(0, index).join('')
}

const result = removeDuplicates('abbaca')

module.exports = removeDuplicates