Function.prototype.call = function (context) {
  const params = Array.from(arguments)
  const fn = this

  context = context || window
  const keyName = `fn${+new Date()}`
  context[keyName] = fn

  context[keyName](...params.slice(1))

  Reflect.deleteProperty(context, keyName)
}

const obj = {
  name: 'lihh'
}

function run(a, b) {
  console.log(this.name, a, b)
}

run.call(obj, 1, 2)
