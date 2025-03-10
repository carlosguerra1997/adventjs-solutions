function missingReindeer(ids) {
  const length = ids.length
  const expectedSum = (length * (length + 1)) / 2
  const actualSum = ids.reduce((acc, id) => acc + id, 0)
  return expectedSum - actualSum
}