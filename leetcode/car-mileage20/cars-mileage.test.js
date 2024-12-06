const analyzeCarMileage = require("./cars-mileage");

test("Analyzing mile data of array", () => {
  const cars = [
    { make: "Toyota", model: "Corolla", year: 2020, mileage: 25000 },
    { make: "Honda", model: "Civic", year: 2019, mileage: 30000 },
    { make: "Ford", model: "Mustang", year: 2021, mileage: 15000 },
  ];

  const analysis = analyzeCarMileage(cars);

  expect(analysis.getTotalMiles).toBe(70000);
  expect(analysis.averageMileage).toBeCloseTo(23333.33);
  expect(analysis.highestMile).toEqual({
    make: "Honda",
    model: "Civic",
    year: 2019,
    mileage: 30000,
  });
  expect(analysis.lowestMile).toEqual({
    make: "Ford",
    model: "Mustang",
    year: 2021,
    mileage: 15000,
  });
});
