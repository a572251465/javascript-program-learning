const fn1 = x => x + 3
const fn2 = x => x * 2
const fn3 = y => y / 5

function compose() {
  const fns = [].slice.call(arguments)
  if (fns.length === 0) return x => x
  if (fns.length === 1) return fns[0]

  // return fns.reduce((pre, cur) => {
  //   return content => pre(cur(content))
  // })

  return fns.reduce((a, b) => (...args) => a(b(...args)))
}

const res = compose(fn1, fn2, fn3)
console.log(res(10))
