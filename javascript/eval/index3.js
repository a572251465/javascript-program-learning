function test() {
  const sum = new Function('x', 'return x')
  return sum(20)
}
console.log(test())
