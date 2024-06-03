const log = console.log;

function sortedSquared(nums) {
  let newArr = Array(nums.length).fill(0);

  let pointerLeft = 0;
  let pointerRight = nums.length - 1;

  for (let index = nums.length - 1; index >= 0; --index) {
    let mathLeftCouter =
      Math.abs(nums[pointerLeft]) > Math.abs(nums[pointerRight]);
    if (mathLeftCouter) {
      newArr[index] = nums[pointerLeft] ** 2;
      pointerLeft += 1;
    } else {
      newArr[index] = nums[pointerRight] ** 2;
      pointerRight -= 1;
    }
  }

  return newArr;
}

const testCase = [-7, -3, 2, 3, 11];

// log(sortedSquared(testCase));


module.exports = sortedSquared