// Given an array of integers, find the sum of its elements.
// For example, if the array , , so return .
// Function Description
// Complete the simpleArraySum function in the editor below. It must return the sum of the array elements as an integer.
// simpleArraySum has the following parameter(s):
// ar: an array of integers
// Input Format
// The first line contains an integer, , denoting the size of the array.
// The second line contains  space-separated integers representing the array's elements.
// Constraints
// Output Format
// Print the sum of the array's elements as a single integer.

const randomNumbers = [10, 20, 30]; // 60

// 1. First Approach using .reduce method

function getSumElements(arr) {
  const usingReduce = arr.reduce((num, acc) => {
    return num + acc;
  }, 0);
  return usingReduce;
}

const result = getSumElements(randomNumbers);

//  2. Second solution using for loop

function simpleArraySum(arr) {
  let sum = 0;

  for (let index = 0; index < arr.length; index = +1) {
    sum = sum + index[arr];
  }

  return sum;
}

const result2 = simpleArraySum(randomNumbers)

console.log(result2)

