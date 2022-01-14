/**
 * @author lihh
 * @desc 用来递归不断的new promise.then的
 * @param p 调用的实例
 * @param x 返回值
 * @param resolve 成功的回调
 * @param reject 失败的回调
 * @returns {*}
 */
function nextPromise(p, x, resolve, reject) {
  if (p === x) {
    return reject(new TypeError('循环引用'))
  }

  // 判断是否是对象 以及函数 如果上述两者以外的 直接就按普通值来处理
  if ((x && typeof x === 'object') || typeof x === 'function') {
    let called = false
    try {
      const then = x.then
      // 判断是否是函数 如果不是函数 直接按普通值处理
      if (typeof then === 'function') {
        // 开始调用then
        then.call(
          x,
          (y) => {
            if (called) return
            called = true
            // 有可能then 的返回值还是promise，所以继续调用nextPromise 直到是普通值的时候
            nextPromise(p, y, resolve, reject)
          },
          (r) => {
            if (called) return
            called = true
            nextPromise(p, r, resolve, reject)
          }
        )
      } else {
        resolve(x)
      }
    } catch (e) {
      if (called) return
      called = true
      reject(e)
    }
  } else {
    resolve(x)
  }
}

// promise的几种状态
const promiseStatus = {
  pending: 'pending',
  fulfilled: 'fulfilled',
  rejected: 'rejected'
}

class Promise1 {
  constructor(execute) {
    // 成功的返回值
    this.value = ''
    // promise的状态
    this.state = promiseStatus.pending
    // 失败的原因
    this.reason = ''
    // 延时时，成功的回调函数
    this.resolveCallback = []
    // 延时时，失败的回调函数
    this.rejectCallback = []

    // 成功的回调
    const onFulfilledHandle = (value) => {
      if (this.state !== promiseStatus.pending) return

      // 如果传递的数据是promise实例 再次调用then 做特殊处理
      if (value instanceof Promise1) {
        return value.then(onFulfilledHandle, onRejectedHandle)
      }

      this.state = promiseStatus.fulfilled
      this.value = value

      if (this.resolveCallback.length > 0) {
        let fn
        while ((fn = this.resolveCallback.shift())) {
          fn(this.value)
        }
      }
    }

    // 失败的回调
    const onRejectedHandle = (reason) => {
      if (this.state !== promiseStatus.pending) return

      if (reason instanceof Promise1) {
        return reason.then(onFulfilledHandle, onRejectedHandle)
      }

      this.state = promiseStatus.rejected
      this.reason = reason

      if (this.rejectCallback.length > 0) {
        let fn
        while ((fn = this.rejectCallback.shift())) {
          fn(this.reason)
        }
      }
    }

    try {
      // 立即执行传递的构造函数
      execute(onFulfilledHandle, onRejectedHandle)
    } catch (e) {
      // 异常的时候 直接调用错误信息
      onRejectedHandle(e)
    }
  }

  // then 会返回一个全新的promise
  then(onFulfilled, onRejected) {
    // 传递的then  有可能两个函数都没有 所以需要做特殊处理
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : (x) => x
    onRejected =
      typeof onRejected === 'function'
        ? onRejected
        : (err) => {
            throw err
          }

    let x
    // 如果状态还是等待中 说明是异步
    if (this.state === promiseStatus.pending) {
      const p2 = new Promise1((resolve, reject) => {
        this.resolveCallback.push((...args) => {
          try {
            x = onFulfilled(...args)
            nextPromise(p2, x, resolve, reject)
          } catch (e) {
            reject(e)
          }
        })
        this.rejectCallback.push((...args) => {
          try {
            x = onRejected(...args)
            nextPromise(p2, x, resolve, reject)
          } catch (e) {
            reject(e)
          }
        })
      })
      return p2
    }

    const p = new Promise1((resolve, reject) => {
      try {
        if (this.state === promiseStatus.fulfilled) {
          x = onFulfilled(this.value)
        }
        if (this.state === promiseStatus.rejected) {
          x = onRejected(this.reason)
        }
        nextPromise(p, x, resolve, reject)
      } catch (e) {
        reject(e)
      }
    })
    return p
  }

  catch(callback) {
    return this.then(null, callback)
  }

  // 全部执行结束 才算结束
  static all(arr) {
    const result = []
    let len = 0
    return new Promise1((resolve, reject) => {
      const callback = (i, res) => {
        result[i] = res
        len++
        if (len === arr.length) {
          resolve(result)
        }
      }

      let item = null
      for (let i = 0; i < arr.length, (item = arr[i]); i++) {
        if (item instanceof Promise1) {
          item.then((res) => {
            callback(i, res)
          }, reject)
        } else {
          callback(i, item)
        }
      }
    })
  }

  // 无论是成功的 还是 失败的 都会进行返回
  static allSettled(arr) {
    let len = 0
    const result = []

    return new Promise1((resolve, reject) => {
      const callback = (i, value, status) => {
        result[i] = { status, value }
        len++
        if (len === arr.length) {
          resolve(result)
        }
      }

      let item
      for (let i = 0; i < arr.length, (item = arr[i]); i++) {
        if (item instanceof Promise1) {
          item.then(
            (x) => {
              callback(i, x, 'fulfilled')
            },
            (y) => {
              callback(i, y, 'rejected')
            }
          )
        } else {
          callback(i, item, 'fulfilled')
        }
      }
    })
  }

  // 谁执行的快 返回谁
  static race(arr) {
    return new Promise1((resolve, reject) => {
      let item
      for (let i = 0; i < arr.length, (item = arr[i]); i++) {
        if (item instanceof Promise1) {
          item.then(resolve, reject)
        } else {
          resolve(item)
        }
      }
    })
  }

  // 直接返回promise的失败的状态
  static reject(value) {
    return new Promise1((resolve, reject) => {
      reject(value)
    })
  }

  // 直接返回promise的成功态
  static resolve(value) {
    return new Promise1((resolve) => {
      resolve(value)
    })
  }

  // 如果有成功的状态 直接返回第一个成功的状态 如果都不成功的话 返回第一个失败的状态
  static any(arr) {
    const failResult = []
    let len = 0
    return new Promise1((resolve, reject) => {
      const callback = (status, value) => {
        len++
        if (status === 'fulfilled') {
          resolve(value)
        } else {
          failResult.push(value)
        }

        if (len === arr.length) {
          resolve(failResult[0])
        }
      }

      let item
      for (let i = 0; i < arr.length, (item = arr[i]); i++) {
        item.then(
          (x) => {
            callback('fulfilled', x)
          },
          (y) => {
            callback('rejected', y)
          }
        )
      }
    })
  }
}

module.exports = Promise1
