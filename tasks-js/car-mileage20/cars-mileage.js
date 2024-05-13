const cars = [
  { make: "Toyota", model: "Corolla", year: 2020, mileage: 25000 },
  { make: "Honda", model: "Civic", year: 2019, mileage: 30000 },
  { make: "Ford", model: "Mustang", year: 2021, mileage: 15000 },
];

const log = console.log;

// Implement a function called analyzeCarMileage which takes in an array of car objects and performs the following tasks:
/* [x] - Calculate the total mileage of all cars combined (SOLVED).
   [x] -  Calculate the average mileage of all cars (SOLVED).
   [x] - Find the car with the highest mileage.
   [x] - Find the car with the lowest mileage.
*/

function analyzeCarMileage(car) {
  const getTotalMiles = car.reduce((index, acc) => {
    return (index = index + acc.mileage);
  }, 0);

  const getAvg = getTotalMiles / cars.length;

  const formatAvg = parseFloat(getAvg.toFixed(2));

  const lowestMile = Math.min(...cars.map((car) => car.mileage));

  const highestMile = Math.max(...cars.map((car) => car.mileage));

  return { getTotalMiles, formatAvg, lowestMile, highestMile };
}

// log(analyzeCarMileage(cars));

module.exports = analyzeCarMileage;
