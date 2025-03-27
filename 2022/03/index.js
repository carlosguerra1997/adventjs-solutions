function distributeGifts(packOfGifts, reindeers) {
  const giftsWeight = packOfGifts.join('').length
  const reindeersWeight = reindeers.join('').length * 2
  return Math.floor(reindeersWeight / giftsWeight)
}