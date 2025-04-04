function countTime(leds) {
  const ledsToString = leds.join("")
  const segments = ledsToString.split("1")
  segments[0] += segments.pop()
  const segmentLengths = segments.map(segment => segment.length)
  return Math.max(...segmentLengths) * 7
}
