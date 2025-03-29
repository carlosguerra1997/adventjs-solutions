function fitsInOneBox(boxes) {
  const sortedBoxes = boxes.toSorted((a, b) => a.l - b.l || a.w - b.w || a.h - b.h)

  for (let i = 0; i < sortedBoxes.length - 1; i++) {
    const box1 = sortedBoxes[i]
    const box2 = sortedBoxes[i + 1]

    if (box1.l >= box2.l || box1.w >= box2.w || box1.h >= box2.h) {
      return false
    }
  }

  return true
}