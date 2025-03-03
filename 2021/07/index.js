function contains(store, product) {
  for (const [_, value] of Object.entries(store)) {    
    if (typeof value === 'string') {
      if (value === product) {
        return true
      }
    }

    if (typeof value === 'object') {
      if (contains(value, product)) {
        return true
      }
    }
  }

  return false
}
