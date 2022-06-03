function test() {
  return 1
}

console.log(test()) // 1

function* test1() {
  return 1
}

console.log(test1()) // { '@@iterator': [Function: next] }
