const formatPhoneNumber = require("./format-number");

test("Testing format phone number", () => {
  expect(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9])).toBe(
    "(123) 456 - 789"
  );
  expect(formatPhoneNumber([7, 2, 8, 1, 6, 3, 9, 0, 5, 4])).toBe(
    "(728) 163 - 9054"
  );
  expect(formatPhoneNumber([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])).toBe(
    "(987) 654 - 3210"
  );
  expect(formatPhoneNumber([7, 8, 5, 6, 3, 4, 1, 2, 9, 0])).toBe(
    "(785) 634 - 1290"
  );
});
