function getMinJump(obstacles) {
  const maxObstacle = Math.max(...obstacles)
  const obstacleSet = new Set(obstacles)
  
  for (let i = 1; i <= maxObstacle + 1; i++) {
    let valid = true

    for (let j = 0; j <= maxObstacle; j += i) {
      if (obstacleSet.has(j)) {
        valid = false
        break
      }
    }

    if (valid) return i
  }
}

const obstacles = [2, 4, 6, 8, 10]
const result = getMinJump(obstacles)
console.log('Result: ', result)