## throttle 节流的实现方案

1. 在一定的时间段内减低触发频率，而且不会触发第二次

### 注意事项

```
  1. 可以通过时间戳来控制 是否触发
  2. 可以通过延时器控制是否触发
  3. 可以设置开始触发一次，结束触发一次
```

```javascript
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
```
