const restoreIpAddresses = require('./restore-ip-adress-solution')

test('Given a string s containing only digits, return all possible valid IP addresses that can be formed by inserting dots into s.', () => {
  expect(restoreIpAddresses("25525511135")).toEqual(["255.255.11.135","255.255.111.35"])
  expect(restoreIpAddresses("0000")).toEqual(["0.0.0.0"])
  expect(restoreIpAddresses("101023")).toEqual(["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"])
})