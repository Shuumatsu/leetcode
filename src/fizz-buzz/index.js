/**
 * @param {number} n
 * @return {string[]}
 */

const calc = c => {
  const r = c % 15
  const n = (c - r) / 15

  return [n, r]
}

const isNumeric = n => !isNaN(parseInt(n)) && isFinite(n)

const base = [
  "1",
  "2",
  "Fizz",
  "4",
  "Buzz",
  "Fizz",
  "7",
  "8",
  "Fizz",
  "Buzz",
  "11",
  "Fizz",
  "13",
  "14",
  "FizzBuzz"
]

const generateNextArray = i => base.map(v => isNumeric(v) ? parseInt(v) + i * 15 + '' : v)

const fizzBuzz = c => {
  let result = []

  const [n, r] = calc(c)

  for (let i = 0; i < n; i++) {
    result = result.concat(generateNextArray(i))
  }
  result = result.concat(generateNextArray(n).slice(0, r))

  return result
}