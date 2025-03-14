function fixFiles(files) {
  const filesMap = new Map()
  const result = []

  for (const file of files) {
    if (!filesMap.has(file)) {
      filesMap.set(file, 0)
      result.push(file)
    } else {
      const value = filesMap.get(file)
      result.push(`${file}(${value + 1})`)
      filesMap.set(file, value + 1)
    }
  }

  return result
}