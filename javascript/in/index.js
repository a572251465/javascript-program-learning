class superClass {
  constructor() {
    this.name = 'superClass'
  }
}

class subClass extends superClass {
  constructor() {
    super()
  }
}

const sub = new subClass()

if ('name' in sub) {
  console.log('address is in info')
}

if (Object.hasOwnProperty.call(sub, 'name')) {
  console.log('address is in info')
}
