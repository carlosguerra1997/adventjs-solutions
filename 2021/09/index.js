function groupBy(collection, it) {
  const result = {}

  for (const item of collection) {
    let key = ''

    if (typeof it === 'function') {
      key = it(item)
    } else {
      console.log({ item, it })
      key = item[it]
    }

    if (!result[key]) {
      result[key] = [item]
    } else {
      result[key].push(item)
    }
  }

  return result
}