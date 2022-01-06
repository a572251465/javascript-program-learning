// 模拟红绿灯：红灯3s，绿灯2s，黄灯1s，如此循环 (async await)
const makePromise = (time, val) => {
  return () =>
    new Promise((resolve) => {
      const timer = setTimeout(() => {
        clearTimeout(timer)
        resolve(val)
      }, time)
    })
}

const myAsyncIterable = {}
// Symbol.asyncIterator 该符号作为一个属性表示一个方法，该方法返回默认的AsyncIterator. 由for-await-of语句来说使用
// 换句话说，这个符号可以实现异步迭代器API的函数
myAsyncIterable[Symbol.asyncIterator] = async function* () {
  yield makePromise(3000, '红色')()
  yield makePromise(2000, '绿色')()
  yield makePromise(1000, '黄色')()
}

async function asyncFn() {
  for await (const item of myAsyncIterable) {
    console.log(item)
    if (item === '黄色') asyncFn()
  }
}

asyncFn()
