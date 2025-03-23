function canReconfigure(from, to) {
  if (from.length !== to.length) return false

  const mapping = new Map()
  const usedToLetters = new Set()

  for (let i = 0; i < from.length; i++) {
    const fromLetter = from[i]
    const toLetter = to[i]

    if (mapping.has(fromLetter)) {
      if (mapping.get(fromLetter) !== toLetter) {
        return false
      }

      continue
    }
      
    if (usedToLetters.has(toLetter)) {
      return false
    }

    mapping.set(fromLetter, toLetter)
    usedToLetters.add(toLetter)
  }

  return true
}