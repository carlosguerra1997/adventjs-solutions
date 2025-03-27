function countHours(year, holidays) {
  let extraHours = 0

  for (let i = 0; i < holidays.length; i++) {
    const weekDay = new Date(`${holidays[i]}/${year}`).getDay()

    if (weekDay > 0 && weekDay < 6) {
      extraHours += 2
    }
  }

  return extraHours
}