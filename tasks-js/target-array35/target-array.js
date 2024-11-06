function findTarget(arr, target) {
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] === target) return index

  }
  return - 1
}

module.exports = findTarget