function createXmasTree(height) {
  let tree = ''
  const base = '_'.repeat(height - 1) + '#' + '_'.repeat(height - 1)

  for (let i = 0; i < height; i++) {
    const asterisks = i * 2 + 1
    const spaces = height - i - 1
    const row = '_'.repeat(spaces) + '*'.repeat(asterisks) + '_'.repeat(spaces)
    tree += row + '\n'
  }

  tree += base + '\n'
  tree += base
  
  return tree
}