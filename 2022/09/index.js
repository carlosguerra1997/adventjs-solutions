function countTime(leds) {
  let time = 0

  while (leds.includes(0)) {
    let newLeds = [...leds]
    time += 7

    if (leds[leds.length - 1] === 1 && leds[0] === 0) {
      newLeds[0] = 1
    }

    for (let i = 0; i < leds.length; i++) {
      if (leds[i] === 0 && leds[i - 1] === 1) {
        newLeds[i] = 1
      }
    }

    leds = newLeds
  }

  return time
}