function sortedSquared(nums) {
  const lengthArray = nums.length;

  let newArr = new Array(lengthArray).fill(0);

  let pointerLeft = 0;
  let pointerRight = lengthArray - 1;

  for (let index = lengthArray - 1; index >= 0; --index) {
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

module.exports = sortedSquared;
