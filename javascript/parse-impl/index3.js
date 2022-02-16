function parse(obj, str = '') {
  str = str.replace(/\[(\d+)\]/gi, '.$1')

  const arr = str.split('.')
  arr.forEach((item) => {
    obj = obj[item]
  })

  return obj
}

const obj = { a: 1, b: { c: 2 }, d: [1, 2, 3], e: [{ f: [4, 5, 6] }] }
const r1 = parse(obj, 'a') // = 1;
console.log(r1)
const r2 = parse(obj, 'b.c') // = 2;
console.log(r2)
const r3 = parse(obj, 'd[2]') // = 3;
console.log(r3)
const r4 = parse(obj, 'e[0].f[0]') // = 4;
console.log(r4)
