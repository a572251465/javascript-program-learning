Object.defineProperty(window, 'a', {
  get: (() => {
    let i = 0
    return () => {
      return ++i
    }
  })()
})

if (a == 1 && a == 2 && a == 3) {
  console.log('相等了')
}
