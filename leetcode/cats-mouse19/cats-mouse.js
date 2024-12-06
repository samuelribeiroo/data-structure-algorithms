function catsAndMouse(x, y, z) {
  let catA = x;
  let catB = y;
  let chasedMouse = z;

  const firstCatWinner = Math.abs(chasedMouse - catA) < Math.abs(chasedMouse - catB) 

 const secondCatWinner = Math.abs(chasedMouse - catB) === Math.abs(chasedMouse - catA)

  if (firstCatWinner) {
    return "Cat A";
  } else if (secondCatWinner) {
    return "Mouse C";
  } else {
    return "Cat B";
  }
}
// 1, 2, 3 --> Cat B
// 1, 3, 2 -> Mouse
// 2, 5, 7 -> Cat B



module.exports = catsAndMouse;
