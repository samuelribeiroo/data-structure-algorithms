const expNum = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];

function aVeryBigSum(arr) {
  const addElements = arr.reduce((sum, acc) => {
    return sum + acc
  }, 0)

  return addElements
}

const result = aVeryBigSum(expNum)

module.exports = aVeryBigSum

