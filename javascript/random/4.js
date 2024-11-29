const map = new Map([
  ['id', 1],
  ['name', 2]
])

map.forEach((item) => {
  // console.log(item)
})

const arr = [
  {
    params: { userId: '222' },
    route: '111'
  },
  {
    params: { userId: '222', detailId: '333' },
    route: '222'
  }
]

const obj = arr.reduceRight((outlet, match, index) => {
  console.log(index)
  console.log(arr.slice(0, index + 1))
  return match.route
}, {})
console.log(obj)
