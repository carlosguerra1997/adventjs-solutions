function checkSledJump(heights) {
  let i = 0;
  
  while (i < heights.length - 1 && heights[i] < heights[i + 1]) {
    i++;
  }

  if (i === 0 || i === heights.length - 1) return false
  
  while (i < heights.length - 1 && heights[i] > heights[i + 1]) {
    i++;
  }

  return i === heights.length - 1
}
