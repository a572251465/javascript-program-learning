const fn1 = (a) => a + 3
const fn2 = (b) => b * 2
const fn3 = (c) => c - 1

const compose = (...fns) => {
  if (fns.length === 0) return (x) => x
  if (fns.length == 1) return fns[0]

  return fns.reduce(
    (a, b) =>
      (...args) =>
        b(a(...args))
  )
}

const fn = compose(fn1, fn2, fn3)
console.log(fn(3))
