function listGifts(letter) {
  const gifts = {}

  letter
    .trim()
    .split(' ')
    .filter(gift => !gift.startsWith('_'))
    .map(gift => {
      gifts[gift] = (gifts[gift] || 0) + 1
    })

  return gifts
}

const letter = 'bici coche balón _playstation bici coche peluche'
listGifts(letter)