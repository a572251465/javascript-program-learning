function parse(obj, field) {
  field = field.replace(/\[(\d+)\]/gi, '.$1')
  const arr = field.split('.')
  let i = 0
  for (; i < arr.length; i += 1) {
    obj = obj[arr[i]]
  }
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
