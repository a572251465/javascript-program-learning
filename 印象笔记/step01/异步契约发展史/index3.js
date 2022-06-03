async function sleep(delay) {
  return new Promise((resolve) => setTimeout(resolve, delay))
}

async function run() {
  const t0 = Date.now()
  await sleep(1000)
  console.log(Date.now() - t0)
}
run()
