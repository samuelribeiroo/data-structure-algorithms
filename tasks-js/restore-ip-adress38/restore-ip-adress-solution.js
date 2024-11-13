/**
 * @param {string} s
 * @return {string[]}
 */

let restoreIpAddresses = function (s) {
  if (!s || s.length === 0) return []

  let result = []

  const dfs = (startIndex, remaining, ip) => {
    if (remaining === 0) {
      if (startIndex === s.length) {
        result.push(ip.slice(0, -1))
      }
      return
    }

    for (let index = 1; index <= 3; index++) {
      if (startIndex + index > s.length) break;

      const sub = s.substring(startIndex, startIndex + index)

      if (sub.charAt(0) === '0' && sub.length > 1) return

      if (Number(sub) <= 255) {
        dfs(startIndex + index, remaining - 1, ip + sub + '.')
      }
    }
  }

  dfs(0, 4, '')
  return result
};

module.exports = restoreIpAddresses