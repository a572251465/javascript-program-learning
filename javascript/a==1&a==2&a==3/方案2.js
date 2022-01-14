Object.defineProperty(window, 'a', {
  get: (() => {
    let i = 0
    return () => {
      return ++i
    }
  })()
})

// 原理 在全局上定义属性，重写get方法，每次调用的时候都能监听到
if (a == 1 && a == 2 && a == 3) {
  console.log('相等了')
}
