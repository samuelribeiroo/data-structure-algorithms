// LEETCODE 2418 - Sort The People (Category: Easy)

// You are given an array of strings names, and an array heights that consists of distinct positive integers. Both arrays are of length n.

// For each index i, names[i] and heights[i] denote the name and height of the ith person.

// Return names sorted in descending order by the people's heights.

// Approach 1 = Solution that I build with knowledge and passes on the test at platform.

const sortPeople = (names, heights) => {
  const persons = names

  const height = heights

  const mapping = persons.map((name, index) => ({
    name: name,
    height: height[index]
  }))

  return mapping.sort((a, b) => b.height - a.height).map(persons => persons.name)
}

module.exports = sortPeople


// Approach 2 = Solution from forum that I use to study a little more about algorith


const sortPeople2 = (names, heights) => {
  let array = []
  let retune = []

  for (let index = 0; index < names.length; index++) {
    array.push(names[index], heights[index])
  }

  array.sort((a, b) => b[1] - a[1])

  for(const arr of array) {
    retune.push(arr[0])
  }

  return retune
}

// console.log(sortPeople(["Mary","John","Emma"], [180,165,170])) 
// Expected: ["Mary","Emma","John"]






