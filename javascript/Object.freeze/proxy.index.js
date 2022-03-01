const obj = {
  name: 'lihh',
  study: {
    age: 12,
    time: 11,
    school: {
      age: 111,
      name: '大学'
    }
  }
}

// 通过API proxy可以实现冻结等
const proxyObj = new Proxy(obj, {
  get(target, p, receiver) {
    console.log('---get:')
    console.log(target, p)
    return Reflect.get(target, p, receiver)
  },
  set(target, p, value, receiver) {}
})

console.log(proxyObj.name)
