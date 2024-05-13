const cars = [
  { make: "Toyota", model: "Corolla", year: 2020, mileage: 25000 },
  { make: "Honda", model: "Civic", year: 2019, mileage: 30000 },
  { make: "Ford", model: "Mustang", year: 2021, mileage: 15000 },
];

const log = console.log;

// Implement a function called analyzeCarMileage which takes in an array of car objects and performs the following tasks:
/* [x] - Calculate the total mileage of all cars combined (SOLVED).
   [] -  Calculate the average mileage of all cars (NOT SOLVED).

*/

function analyzeCarMileage(car) {
  const getTotalMiles = car.reduce((index, acc) => {
    return (index = index + acc.mileage);
  }, 0);

  return getTotalMiles;
}

const findAverage = () => {
  //... Insert the code here
};

const backLog = analyzeCarMileage(cars);

log(backLog);

module.exports = analyzeCarMileage;
module.exports = findAverage;
