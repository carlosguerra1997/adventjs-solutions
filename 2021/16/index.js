function decodeNumbers(symbols) {
  const symbolValues = {
    '.': 1,
    ',': 5,
    ':': 10,
    ';': 50,
    '!': 100,
  }

  let result = 0
  let prevValue = 0

  for (let i = symbols.length -1; i >= 0; i--) {
    const currentSymbol = symbols[i]
    const currentSymbolValue = symbolValues[currentSymbol]

    if (!currentSymbolValue) {
      return NaN
    }

    if (currentSymbolValue < prevValue) {
      result -= currentSymbolValue
    } else {
      result += currentSymbolValue
    }

    prevValue = currentSymbolValue
  }

  return result
}
