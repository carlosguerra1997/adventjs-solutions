function checkJump(heights) {
  const max = Math.max(...heights)
  const leftPart = heights.splice(0, heights.indexOf(max))

  if (!leftPart.length || heights.length <= 1) {
    return false
  }

  const bottomToTop = leftPart
    .slice(1)
    .every((part, i) => part >= leftPart[i])

  const pitongo = heights.slice(1)
  console.log({ pitongo, heights })

  const topToBottom = heights
    .slice(1)
    .every((height, i) => height <= heights[i])


  return bottomToTop && topToBottom
}

const heights = [1, 3, 8, 5, 2]
const result = checkJump(heights)
