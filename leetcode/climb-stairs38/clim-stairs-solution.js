let climbStairs = function(n) {
  if (n < 2) {
    return 1;
  }

  let firstStep = 1;

  let secondStep = 1;
  
  let thirdStep = 0;

  for (let index = 2; index <= n; index++) {
    thirdStep = firstStep + secondStep

    firstStep = secondStep

    secondStep = thirdStep
  }

  return thirdStep
}


const result = climbStairs(3)

module.exports = climbStairs