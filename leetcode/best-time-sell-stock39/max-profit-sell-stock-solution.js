let maxPrice = prices => {
  let buyPrice = prices[0] || 0
  let maxProfit = 0

  for (let index = 1; index < prices.length; index++) {
    
    if (prices[index] < buyPrice) {
      buyPrice = prices[index]
    }

    maxProfit = Math.max(maxProfit, prices[index] - buyPrice)
  }

  return maxProfit
}

const result = maxPrice([2,3,8,4,7,9])

console.log(result)

module.exports = maxPrice