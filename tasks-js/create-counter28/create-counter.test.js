const createCounter = require("./create-counter");

const counter = createCounter(5);

test("A counter with three main functionalities: Increment, Reset and Decrement", () => {
  expect(counter.increment()).toBe(6);
  expect(counter.reset()).toBe(5);
  expect(counter.decrement()).toBe(4);
});

