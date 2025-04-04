function checkPart(part) {  
  function isPalindrome(word) {
    return word === word.split('').reverse().join('')
  }

  if (isPalindrome(part)) {
    return true
  }

  for (let i = 0; i < part.length; i++) {
    const newPart = part.slice(0, i) + part.slice(i + 1)
    if (isPalindrome(newPart)) {
      return true
    }
  }

  return false
}