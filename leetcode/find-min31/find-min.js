function sortArray(array) {
  const length = array.length;
  let sortedArray = []

  for (let index = 1; index < length; index++) {
    const minIndex = findMinIndex(array);
     sortedArray = sortedArray.concat(array.slice(minIndex, minIndex + 1));
     console.log(sortedArray)
     array = array.slice(0, minIndex).concat(array.slice(minIndex + 1));
  }

  return sortedArray
}

function findMinIndex(array) {
  const length = array.length;
  let minIndex = 0;

  for (let index = 1; index < length; index++) {
    if (array[index] < array[minIndex]) {
      minIndex = index;
    }
  }

  return minIndex;
}

const list = [250, 1, 347, 9];
const sortedList = sortArray(list);
console.log(sortedList); 
