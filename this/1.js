var name = 'lihh1'

const user = {
  name: 'lihh2',
  getName: function () {
    return this.name
  },

  getName1: () => {
    return this.name
  }
}

console.log(user.getName()) // lihh2
console.log(user.getName1()) // lihh1
