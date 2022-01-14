/**
 * @author lihh
 * @description 降低触发频率
 * @param {*} fn 触发的方法
 * @param {*} wait 等待时间
 * @param {*} options 以及配置参数
 */
function throttle(fn, wait) {
  let timer = null
  let preTime = 0

  const throttled = function () {
    // this指向
    const self = this
    // 传递参数
    const args = arguments

    // 现在时刻时间
    const now = +new Date()
    // 剩余时间
    const surplus = wait - (now - preTime)
    // 剩余时间不足 立刻执行
    if (surplus <= 0) {
      fn.apply(self, args)
      preTime = now

      if (timer) {
        clearTimeout(timer)
        timer = null
      }
    } else {
      if (timer) return
      // 通过定时器执行
      timer = setTimeout(() => {
        fn.apply(self, args)

        clearTimeout(timer)
        timer = null
      }, wait)
    }
  }
  return throttled
}
