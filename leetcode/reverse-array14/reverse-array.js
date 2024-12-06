const log = console.log

const mockArr = [1, 20, 32, 9, 3] // 3, 9, 32,20, 1

function reverseArray(arr) {
  const getReversed = arr.reverse()

  return getReversed
}

const result = reverseArray(mockArr)

module.exports = reverseArray