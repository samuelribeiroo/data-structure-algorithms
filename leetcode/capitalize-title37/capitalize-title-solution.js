/**
 * @param {string} title
 * @return {string}
 */


/*   

2129. Capitalize the Title

You are given a string title consisting of one or more words separated by a single space, where each word consists of English letters. Capitalize the string by changing the capitalization of each word such that:

If the length of the word is 1 or 2 letters, change all letters to lowercase.
Otherwise, change the first letter to uppercase and the remaining letters to lowercase.
Return the capitalized title.


*/
function capitalizeTitle(title) {
  const word = title.toLowerCase()

  return word.split(' ').map(word => {
    if (word.length <= 2) {
      return word.toLocaleLowerCase()
    } else {
      return word[0].toUpperCase() + word.slice(1).toLocaleLowerCase()
    }
  }).join(' ')
}

const result = capitalizeTitle("First leTTeR of EACH Word")

console.log(result)

module.exports = capitalizeTitle



















