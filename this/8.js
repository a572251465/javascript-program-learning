function getName(a, b) {
  return [this.name, a, b]
}

const user = {
  name: 'lihh'
}

const fn = getName.bind(user, 1)
console.log(fn(2)) // ['lihh', 1, 2]
