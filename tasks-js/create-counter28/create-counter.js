function createCounter(init) {
  // create a helper variable and initialize with zero or the paremeter.

  let count = init + 0;

  const increment = () => {
    count = count + 1;

    return count;
  };

  const reset = () => {
    count = init + 0;

    return count;
  };

  const decrement = () => {
    count = count - 1;

    return count;
  };

  return { increment, reset, decrement };
}

const counter = createCounter(5);

console.log(counter.increment());
console.log(counter.reset());
console.log(counter.decrement());