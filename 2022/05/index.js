function getMaxGifts(giftsCities, maxGifts, maxCities) {
  const citiesLength = giftsCities.length
  let max = 0
 
  function backtrack(start, path, sum) {
    if (path.length > maxCities || sum > maxGifts) return
    max = Math.max(max, sum)

    for (let i = start; i < citiesLength; i++) {
      const paths = [...path, giftsCities[i]]
      const total = sum + giftsCities[i]
      backtrack(i + 1, paths, total)
    }
  }

  backtrack(0, [], 0)
  return max
}