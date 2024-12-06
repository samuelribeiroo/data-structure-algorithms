function lengthOfLastWord(str) {
  // The .trim method here its so much important 
  // cause he will be responsible to remove blank spaces and make the correct counting.
  let convert = str.trim().split(' ', str.length);

  // Very helpful structure to return the last item from an array.
  let last = convert[convert.length - 1]

  return last.length;
}


module.exports = lengthOfLastWord