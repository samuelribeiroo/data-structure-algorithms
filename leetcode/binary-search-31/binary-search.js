// Binary Search is a algorithm that make a search in a ordened list. 

// To start we need declare a function that will receive two parameters: Array (Ordened List) and Target.

// To help us resolve this algorithm will be declared three helpers variables; Left, Right and Middle.

// The verification will be made it at while loop and will be applied the pointer approach

const log = console.log

function binarySearch(array, target) {
let left = 0
let right = array.length - 1

// While Loop is saying: 'Continues if right are smaller or equal to left'
while (left <= right) {
  // This variable basically divide our ordened list.
  // biome-ignore lint/style/useConst: <explanation>
    let middle = Math.floor((left + right) / 2)

  if(array[middle] === target) {
    return middle // Here are if middle is equal to middle
  // biome-ignore lint/style/noUselessElse: <explanation>
  } else if(array[middle] < target) {
    right = middle + 1 // Looking for half right
  } else {
    left = middle - 1 // Looking for half left
  }
}

return - 1
}

const sortedList = [1, 3, 5, 7, 9, 11, 13]
const targetValue = 7
const index = binarySearch(sortedList, targetValue)

if(index !== - 1) {
  log(`O elemento alvo ${targetValue} foi encontrado no indíce ${index}`)
} else {
  log(`O elemento alvo ${targetValue} não foi encontrado`)
}
