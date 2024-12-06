/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
let sortColors = function (nums) {
  let pointerLeft = 0;
  let pointerRight = nums.length - 1;
  let startIndex = 0;

  while (pointerLeft < pointerRight && startIndex <= pointerRight) {
    if (nums[startIndex] === 0) {
      [nums[pointerLeft], nums[startIndex]] = [nums[startIndex], nums[pointerLeft]]
      pointerLeft++
      startIndex++
    } else if (nums[startIndex] === 2) {
      [nums[pointerRight], nums[startIndex]] = [nums[startIndex], nums[pointerRight]]
      pointerRight--
    } else {
      startIndex++
    }
  }

  return nums
};

const result = sortColors([2, 0, 2, 1, 1, 0])

module.exports = sortColors