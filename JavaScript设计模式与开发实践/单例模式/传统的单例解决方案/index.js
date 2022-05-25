function Person() {
  this.name = 'lihh'
}

let singleInstance
const getInstance = () => {
  if (!singleInstance) {
    singleInstance = new Person()
  }
  return singleInstance
}

console.log(getInstance() === getInstance())
