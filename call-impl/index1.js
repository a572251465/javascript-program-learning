Function.prototype.call = function (context) {
  context = context || window
  const params = []
  const self = this

  for (let i = 1; i < arguments.length; i++) {
    params.push(`arguments[${i}]`)
  }

  const keyName = +new Date() + 'fn'
  context[keyName] = self
  eval(`context[keyName](${params})`)
  // context[keyName](...optionArr)
  delete context[keyName]
}

const obj = {
  name: 'lihh'
}

function run(a, b) {
  console.log(this.name, a, b)
}

run.call(obj, 1, 2)
