'use strict'

class Person {
  constructor() {}
  eat() {
    console.log(this)
  }

  say = () => {
    'use strict'
    console.log(this)
  }
}

const person = new Person()
person.eat() // Person {}

const person1 = new Person()
person1.say() // Person {}

let count = 0
setInterval(() => {
  console.log('执行的定时器......' + ++count)
}, 1000)
