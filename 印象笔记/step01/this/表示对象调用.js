const person = {
  name: 'lixx',
  getName: function () {
    return this.name
  }
}
console.log(person.getName()) // lixx

var name = 'yyy'
const run = person.getName
console.log(run()) // yyy
