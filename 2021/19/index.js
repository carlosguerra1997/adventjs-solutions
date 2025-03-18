function learn(time, courses) {
  let maximumHours = null
  let coursesIndexes = null

  for (let i = 0; i < courses.length; i++) {
    for (let j = i + 1; j < courses.length; j++) {
      const firstCourse = courses[i]
      const secondCourse = courses[j]

      if (firstCourse + secondCourse > maximumHours && firstCourse + secondCourse <= time) {
        maximumHours = firstCourse + secondCourse
        coursesIndexes = [i, j]
      }
    }
  }

  return coursesIndexes
}