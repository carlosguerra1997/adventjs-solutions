function pangram(letter) {
  const lettersSet = new Set()
  const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
    'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't',
    'u', 'v', 'w', 'x', 'y', 'z'
  ]

  for (const char of letter) {
    if (char === ' ') continue

    const isValidLetter = letters.includes(char.toLowerCase())
    if (!lettersSet.has(char.toLowerCase()) && isValidLetter) {
      lettersSet.add(char.toLowerCase())
    }
  }

  return lettersSet.size === 27
}