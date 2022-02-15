var foo = {
  value: 1
}

function bar([name, age]) {
  console.log(name)
  console.log(age)
  console.log(this.value)
  return {
    name,
    age
  }
}

Function.prototype.apply = function (context) {
  const args = Array.from(arguments).slice(1),
    self = this
  context = context || window

  const keyName = `fn${(Math.random() * 1000) | 0}`
  context[keyName] = self
  const res = context[keyName](...args)
  Reflect.deleteProperty(context, keyName)

  return res
}

bar.apply(foo, [1, 2])
