function throttle(fn, wait = 0) {
  let timer = null
  let diff = 0
  let preTime = +new Date()
  return function () {
    const curTime = +new Date()
    diff = curTime - preTime
    if (diff >= wait) {
      fn.apply(this, arguments)
      preTime = curTime
      clearTimeout(timer)
      timer = null
      return
    }

    if (timer) {
      clearTimeout(timer)
      timer = null
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments)
      clearTimeout(timer)
      timer = null
    }, diff)
  }
}
