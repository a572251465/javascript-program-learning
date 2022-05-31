function createPerson(name, age, job) {
  const o = new Object()
  o.name = name
  o.age = age
  o.job = job

  o.sayName = function () {
    console.log(this.name)
  }
  return o
}

const p1 = createPerson('xxx', 29, 'yyy')
const p2 = createPerson('xxx1', 29, 'yyy1')
