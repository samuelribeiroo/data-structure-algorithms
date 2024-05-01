const log = console.log;

function compareTriplets(a, b) {
  let aliceScore = 0;
  let bobScore = 0;

  for (let index = 0; index < a.length; index += 1) {
    if (a[index] > b[index]) {
      aliceScore += 1;
    } else if (b[index] > a[index]) {
      bobScore += 1;
    }
  }

  return [aliceScore, bobScore];
}

// 5 6 7
// 3 6 10

// 21 28 17
// 13 45 89

log(compareTriplets([21, 28, 17], [13,  45, 89]))

module.exports = compareTriplets