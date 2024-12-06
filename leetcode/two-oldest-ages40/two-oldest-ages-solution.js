let twoOldestAges = ages => {
  let result = []

  const oldest = ages.sort((e1, e2) => e2 - e1)

  result.push(oldest[1])
  result.push(oldest[0])

  return result
}

module.exports = twoOldestAges 