function daysToXmas(date) {
  const christmasDay = new Date('Dec 25, 2021')
  const remainingTime = christmasDay.getTime() - date.getTime()
  return Math.ceil(remainingTime / (1000 * 3600 * 24))
}