function addTwo(x) {
  return x + 2
}
function addThree(x) {
  return x + 3
}
function addFive(x) {
  return x + 5
}

async function run(x) {
  for (const fn of [addTwo, addThree, addFive]) {
    x = fn(x)
  }
  return x
}

run(9).then((res) => {
  console.log(res)
})
