function canMouseEat(direction, room) {
  let mouseRow = -1
  let mouseCol = -1

  for (let i = 0; i < room.length; i++) {
    const colIndex = room[i].indexOf('m')
    if (colIndex !== -1) {
      mouseRow = i
      mouseCol = colIndex
      break
    }
  }

  if (mouseRow === -1) {
    return false
  }

  const moves = {
    up:    [mouseRow - 1, mouseCol],
    down:  [mouseRow + 1, mouseCol],
    left:  [mouseRow, mouseCol - 1],
    right: [mouseRow, mouseCol + 1]
  }

  const [newRow, newCol] = moves[direction]
  return room[newRow]?.[newCol] === '*'
}
