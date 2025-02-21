function isValid(letter) {
  const regex = /\(([^{}\[\]()]*)\)/g;
  return letter.match(regex)?.every(match => match.length > 2) ?? false;
}