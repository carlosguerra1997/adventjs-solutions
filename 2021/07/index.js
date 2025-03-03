function contains(store, product) {
  for (const [_, value] of Object.entries(store)) {    
    if (typeof value === 'string' && value === product) {
      return true
    }

    if (typeof value === 'object' && contains(value, product)) {
      return true
    }
  }

  return false
}
