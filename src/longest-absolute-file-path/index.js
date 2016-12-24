/**
 * @param {string} input
 * @return {number}
 */

let maxDepth = 0
const calcDepth = str => {
  const matched = str.match(/\t{1}/g)
  const depth = matched ? matched.length : 0
  if (depth > maxDepth)
    maxDepth = depth

  return depth
}

const lengthLongestPath = input => {
  const splited = input.split('\n')

  const directoryOrFileLength = []
  const fileLength = [0]
  splited.forEach(name => {
    const pathDepth = calcDepth(name)
    const nameLength = name.length - pathDepth

    const pathLength = directoryOrFileLength[pathDepth - 1] ? directoryOrFileLength[pathDepth - 1] + nameLength : nameLength
    directoryOrFileLength[pathDepth] = pathLength

    if (/\./.test(name)) fileLength.push(pathLength + pathDepth)
  })

  return Math.max.apply(null, fileLength)
}