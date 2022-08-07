const user = {
  name: 'lihh1',
  user: {
    name: 'lihh2',
    user: {
      name: 'lihh3',
      getName: function () {
        return this.name
      }
    }
  }
}

console.log(user.user.user.getName()) // lihh3
