function mergeSort(arr) {
  if (arr.length <= 1) return arr

  let middle = Math.floor(arr.length / 2)

  let left = mergeSort(arr.slice(0, middle))
  let right = mergeSort(arr.slice(middle))

  return merge(left, right)
}

function merge(left, right) {
  let result = []
  let index = 0;
  let j = 0;

  while (index < left.length && j < right.length) {
    if (left[index] < right[j]) {
      result.push(left[index])
      index++
    } else {
      result.push(right[j])
      j++
    }
  }

  return result.concat(left.slice(index)).concat(right.slice(j))
}

module.exports = mergeSort