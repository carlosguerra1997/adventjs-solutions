function getCoins(change) {
  const coins = [1, 2, 5, 10, 20, 50]
  const devolution = new Array(coins.length).fill(0)

  for (let i = coins.length - 1; i >= 0; i--) {
    if (change >= coins[i]) {
      devolution[i] = Math.floor(change / coins[i])
      change %= coins[i]
    }
  }

  return devolution
}