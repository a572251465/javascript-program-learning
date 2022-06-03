function* run(value) {
  const res1 = yield value
  const res2 = yield res1
  const res3 = yield res2
  return res3
}

const it = run(1)
console.log(it.next()) // { value: 1, done: false }
console.log(it.next(3)) //  { value: 3, done: false }
console.log(it.next(4)) // { value: 4, done: false }
console.log(it.next(5)) // { value: 5, done: true }
