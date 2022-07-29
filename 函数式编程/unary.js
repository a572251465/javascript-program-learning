const arr = [1, 2, 3]

const res = arr.map(parseInt)
console.log(res);

const unary = (fn) => {
  return fn.length === 1 ? fn : (arg) => fn(arg)
}

const res1 = arr.map(unary(parseInt))
console.log(res1);
