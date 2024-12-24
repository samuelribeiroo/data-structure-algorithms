/**
 * @param {Array} arr
 */
function quickSort(arr) {
  // base case
  if (arr.length === 0) return arr;

  // pivot -> impact direct in performance
  const pivot = arr[0];

  // Sort elements into three piles
  const smallerItems = []
  const equalItems = []
  const biggerItems = []

  for (const element of arr) {
    if (element === pivot) {
      equalItems.push(element)
    } else if (element > pivot) {
      biggerItems.push(element)
    } else {
      smallerItems.push(element)
    }
  }

  let sorted = [...quickSort(smallerItems), equalItems, ...quickSort(biggerItems)] 

  return sorted.flat()
}

const result = quickSort([3, 2, 8, 29, 21, 45, 18]);

console.log(result)
