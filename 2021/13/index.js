function wrapGifts(gifts) {
  if (!gifts.length) return []

  const border = '*'.repeat(gifts[0].length + 2)

  return [
    border,
    ...gifts.map(gift => `*${gift}*`),
    border
  ]
}