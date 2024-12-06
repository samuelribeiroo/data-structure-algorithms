const log = console.log;

const productList1 = [
  { name: "Apple", price: 0.5, quantity: 10 },
  { name: "Banana", price: 0.3, quantity: 20 },
  { name: "Orange", price: 0.6, quantity: 15 },
];

const productList2 = [
  { name: "Keyboard", price: 150, quantity: 10 },
  { name: "Mouse", price: 80, quantity: 20 },
  { name: "Headset", price: 200, quantity: 15 },
];

function getTotalWithTax(products, taxValue) {
  const calculateTotalSales = products.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );

  const findTaxAmount = (calculateTotalSales * taxValue) / 100;

  const getFinalAmount = calculateTotalSales + findTaxAmount;

  return getFinalAmount;
}

const finalResult = getTotalWithTax(productList2, 8);

module.exports = getTotalWithTax;
