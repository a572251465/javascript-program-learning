const obj = {
  name: 'xxx',
  getName() {
    console.log(this.name)
  }
}

obj.getName() // xxx

const obj1 = {
  name: 'yyy',
  getName: () => {
    console.log(this.name)
  }
}

obj1.getName() // undefined
