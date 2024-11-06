function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pointReference = arr[arr.length - 1];
  const axisLeft = [];
  const axisRight = [];

  for (let index = 0; index < arr.length - 1; index++) {
    const ordenedIndex = arr[index];

    if (ordenedIndex < pointReference) {
      axisLeft.push(ordenedIndex);
    } else {
      axisRight.push(ordenedIndex);
    }
  }

  return [...quickSort(axisLeft), pointReference, ...quickSort(axisRight)];
}

const numbersList = [1];

const sortedNumbers = quickSort(numbersList);

module.exports = quickSort;

function counting(number = 'Parametro não fornecido.') {
  console.log(number);

  let baseCase = number < 10 ? counting(number + 1) : null
  
  return baseCase
}

