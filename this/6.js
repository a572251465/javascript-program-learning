function getName(a, b) {
  return [this.name, a, b]
}

const user = {
  name: 'lihh'
}

// call
console.log(getName.call(user, 1, 2)) // [lihh, 1, 2]
