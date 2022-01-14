/**
 * @author lihh
 * @description 防抖函数
 *  绑定this 绑定执行的this
 *  传递参数 可以传递参数
 *  可以取消 可以随时取消延时器
 *  控制时间 控制时间
 *  有返回值
 * @param {*} fn 待执行函数
 * @param {*} wait 等待执行时间
 * @param {*} immediate 是否立即执行
 */
function debounce(fn, wait, immediate = false) {
  let timer = null
  let execd = false
  let result = null

  const debounced = function () {
    // 设置绑定this
    const self = this
    // 传递参数
    const args = arguments

    if (!immediate) {
      // 如果在一定时间内 取消掉 重新触发
      if (timer) clearTimeout(timer)

      timer = setTimeout(() => {
        result = fn.apply(self, args)
        clearTimeout(timer)
        timer = null
      }, wait)
    } else {
      if (execd) return

      result = fn.apply(self, args)
      timer = setTimeout(() => {
        execd = false
        clearTimeout(timer)
        timer = null
      }, wait)
    }
    return result
  }

  // 能中途取消
  debounced.cancel = () => {
    if (immediate) return
    clearTimeout(timer)
    timer = null
  }
  return debounced
}
