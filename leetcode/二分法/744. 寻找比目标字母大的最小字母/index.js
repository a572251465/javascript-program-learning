/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
  let start = 0
  let end = letters.length

  while (start < end) {
    const mid = (start + (end - start) / 2) | 0
    const value = letters[mid]

    if (value <= target) {
      start = mid + 1
    } else {
      end = mid
    }
  }

  return letters[start % letters.length]
}

console.log(nextGreatestLetter(['c', 'f', 'j'], 'a'))
console.log(nextGreatestLetter(['c', 'f', 'j'], 'f'))
console.log(nextGreatestLetter(['c', 'f', 'j'], 'd'))
console.log(nextGreatestLetter(['c', 'f', 'j'], 'g'))
console.log(nextGreatestLetter(['c', 'f', 'j'], 'j'))
console.log(nextGreatestLetter(['c', 'f', 'j'], 'k'))
