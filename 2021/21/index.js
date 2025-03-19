function canCarry(capacity, trip) {
  const steps = []

  const COLLECT_ACTION = 'COLLECT'
  const DELIVER_ACTION = 'DELIVER'

  for (let i = 0; i < 1; i++) {
    for (const travel of trip) {
      const [
        giftsTransportPoint,
        giftsCollectionPoint,
        giftsDeliveryPoint,
      ] = travel

      steps.push({
        action: COLLECT_ACTION,
        step: giftsCollectionPoint,
        gifts: giftsTransportPoint
      })

      steps.push({
        action: DELIVER_ACTION,
        step: giftsDeliveryPoint,
        gifts: giftsTransportPoint
      })
    }
  }

  const sortedSteps = steps.toSorted((a, b) => a.step - b.step)
  let currentCarryingGifts = 0
  
  for (const step of sortedSteps) {
    const { action, gifts } = step
  
    if (action === COLLECT_ACTION) {
      currentCarryingGifts += gifts

      if (currentCarryingGifts > capacity) {
        return false
      }
    } else {
      currentCarryingGifts -= gifts
    }
  }

  return true
}


const result = canCarry(2, [[1, 2, 4], [1, 3, 8], [1, 5, 9]])
console.log('Result: ', result)