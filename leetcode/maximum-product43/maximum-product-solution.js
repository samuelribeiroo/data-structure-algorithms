function adjacentElementsProduct(array) {
let result = [];

let maximumSizeArr = array.length;

for (let index = 0, nextIndex = index + 1; index < maximumSizeArr && nextIndex < maximumSizeArr; index++, nextIndex++) {
  result.push(array[index] * array[nextIndex])
}

return Math.max(...result);
}

const result = adjacentElementsProduct([5, 6, -4, 2, 3, 2, -23]) // Output: 30  


module.exports = adjacentElementsProduct;