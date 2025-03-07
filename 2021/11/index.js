function shouldBuyFidelity(times) {
  const normalTicket = 12
  const fidelityTicket = 250
  const fidelityDiscount = 0.75

  const costNormalTickets = normalTicket * times
  const costFidelityTickets = fidelityTicket + (normalTicket * fidelityDiscount * (1 - fidelityDiscount ** times) / (1 - fidelityDiscount))

  return costNormalTickets > costFidelityTickets
}