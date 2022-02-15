Function.prototype.bind = function (context) {
  // 收集参数
  const params = [].slice.call(arguments, 1)
  const self = this

  function ResultFn() {
    const args = [].slice.call(arguments)

    self.apply(this instanceof ResultFn ? this : context, params.concat(args))
  }

  ResultFn.prototype = Object.create(self.prototype)
  return ResultFn
}

const foo = {
  value: 1
}

function bar(name, age) {
  this.habit = 'shopping'
  console.log(`value=${this.value}; name=${name}; age=${age}`)
}

bar.prototype.friend = 'kevin'
const bindFoo = bar.bind(foo, 'daisy')
bindFoo('111')
const obj = new bindFoo('18')
console.log(obj.habit)
console.log(obj.friend)
