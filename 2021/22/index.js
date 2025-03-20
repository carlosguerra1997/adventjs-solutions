function countDecorations(bigTree) {
  const { value, left, right } = bigTree
  let result = value

  if (left !== null) {
    const total = countDecorations(left)
    result += total
  }

  if (right !== null) {
    const total = countDecorations(right)
    result += total
  }

  return result
}