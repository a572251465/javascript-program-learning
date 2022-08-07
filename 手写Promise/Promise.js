const PromiseStatus = {
  Pending: 'Pending',
  Fulfilled: 'Fulfilled',
  Rejected: 'Rejected'
}

const isObject = (value) =>
  Object.prototype.toString.call(value) === '[object Object]'
const isPromise = (obj) =>
  (isObject(obj) || typeof obj === 'function') && typeof obj.then === 'function'

/**
 * @author lihh
 * @description 深度解析promise 返回值
 * @param p 表示上次的promise 实例
 * @param preValue 上一次的值
 * @param resolve then 返回promise中的 resolve
 * @param reject then返回promise中的 reject
 */
const depthResolvePromise = (p, preValue, resolve, reject) => {
  // 如果是返回value 跟实例是同一个的话 直接报错
  if (p === preValue) {
    throw new TypeError('the same instance cannot be referenced cyclically ')
  }

  // 判断是否是对象 如果不是对象的话 直接执行resolve
  if (isObject(preValue) || typeof preValue === 'function') {
    const then = preValue.then
    // 如果then属性不是函数的话，直接执行resolve
    if (typeof then === 'function') {
      // 从这几话中可以得到 .then 作为一个新的Promise的状态，成功与否取决于内部返回Promise的状态
      try {
        then.call(
          preValue,
          (y) => {
            depthResolvePromise(p, y, resolve, reject)
          },
          (r) => {
            depthResolvePromise(p, r, resolve, reject)
          }
        )
      } catch (e) {
        reject(e)
      }
    } else {
      resolve(preValue)
    }
  } else {
    resolve(preValue)
  }
}

function Promise(execution) {
  // 成功状态的值
  this.value = ''
  // 失败的值
  this.reason = ''
  // 表示每个promise 实例的状态
  this.state = PromiseStatus.Pending
  // 为了应对异步情况。 保存onFulfilled/ onRejected 方法
  this.fulfilledCallback = []
  this.rejectedCallback = []

  // 构造函数的resolve 方法
  const resolveFn = (value) => {
    if (value instanceof Promise) {
      return value.then(resolveFn, rejectFn)
    }
    if (this.state !== PromiseStatus.Pending) return
    this.value = value
    this.state = PromiseStatus.Fulfilled

    this.fulfilledCallback.forEach((fn) => fn(this.value))
  }

  // 构造函数的reject方法
  const rejectFn = (reason) => {
    if (this.state !== PromiseStatus.Pending) return
    this.reason = reason
    this.state = PromiseStatus.Rejected

    this.rejectedCallback.forEach((fn) => fn(this.reason))
  }

  try {
    execution(resolveFn, rejectFn)
  } catch (e) {
    rejectFn(e)
  }
}

Promise.prototype.catch = function (fn) {
  // catch 执行的逻辑就是then 只执行error的分支
  return this.then(null, fn)
}

/**
 * @author lihh
 * @description Promise then方法 本身是一个微任务
 * @param onFulfilled 成功状态的回调
 * @param onRejected 失败状态的回调
 */
Promise.prototype.then = function (onFulfilled, onRejected) {
  if (typeof onFulfilled !== 'function') onFulfilled = (x) => x
  if (typeof onRejected !== 'function')
    onRejected = (err) => {
      throw err
    }

  // 状态resolve/ rejected 的场合
  if ([PromiseStatus.Fulfilled, PromiseStatus.Rejected].includes(this.state)) {
    // 此处代表返回的一个新的实例
    const p = new Promise((resolve, reject) => {
      queueMicrotask(() => {
        try {
          const r =
            this.state === PromiseStatus.Fulfilled
              ? onFulfilled(this.value)
              : onRejected(this.reason)
          depthResolvePromise(p, r, resolve, reject)
        } catch (e) {
          reject(e)
        }
      })
    })
    return p
  }

  // 状态是pending 的场合
  const p = new Promise((resolve, reject) => {
    this.fulfilledCallback.push((value) => {
      queueMicrotask(() => {
        try {
          const r = onFulfilled(value)
          depthResolvePromise(p, r, resolve, reject)
        } catch (e) {
          reject(e)
        }
      })
    })
    this.rejectedCallback.push((reason) => {
      queueMicrotask(() => {
        try {
          const r = onRejected(reason)
          depthResolvePromise(p, r, resolve, reject)
        } catch (e) {
          reject(e)
        }
      })
    })
  })
  return p
}

Promise.prototype.finally = function (fn) {
  try {
    fn()
    return this.then(null, null)
  } catch (e) {
    const callback = () => {
      throw e
    }
    return this.then(callback, callback)
  }
}

/**
 * @author lihh
 * @description 多个promise 同时发出请求，如果全部成功结果 以数组的形式全部返回
 * @param promiseAll promise 数组
 * @returns {Promise} 返回的promise
 */
Promise.all = function (promiseAll = []) {
  return new Promise((resolve, reject) => {
    const resultArr = []
    let count = 0
    const callback = (index, res) => {
      count += 1
      resultArr[index] = res
      if (count >= promiseAll.length) {
        resolve(resultArr)
      }
    }

    for (let i = 0; i < promiseAll.length; i += 1) {
      const p = promiseAll[i]
      if (!isPromise(p)) {
        callback(i, p)
      } else {
        p.then((res) => {
          callback(i, res)
        }, reject)
      }
    }
  })
}

/**
 * @author lihh
 * @description 批量执行promise数组 无论是成功还是失败都会返回 最后返回一个promise  返回结构是：{status: 'fulfilled/ rejected', value}
 * @param allPromise 传递参数
 */
Promise.allSettled = function (allPromise = []) {
  return new Promise((resolve) => {
    let count = 0
    const resultArr = []

    const callback = (index, value, status) => {
      resultArr[index] = { status, value }
      count += 1

      if (count >= allPromise.length) {
        resolve(resultArr)
      }
    }

    allPromise.forEach((item, index) => {
      if (!isPromise(item)) {
        callback(index, item, 'fulfilled')
      } else {
        item.then(
          (res) => {
            callback(index, res, 'fulfilled')
          },
          (err) => {
            callback(index, err, 'rejected')
          }
        )
      }
    })
  })
}

/**
 * @author lihh
 * @description 一旦出现一个可兑现状态，就是可兑现的状态，如果全都不可兑现，就是rejected状态
 * @param allPromise 表示所有的promise
 */
Promise.any = function (allPromise) {
  return new Promise((resolve, reject) => {
    let count = 0
    const rejectedCallback = () => {
      count += 1
      if (count >= allPromise.length) {
        reject('[AggregateError: All promises were rejected]')
      }
    }

    let i = 0
    for (; i < allPromise.length; i += 1) {
      const item = allPromise[i]
      if (!isPromise(item)) {
        return resolve(item)
      } else {
        item.then(
          (res) => {
            return resolve(res)
          },
          () => {
            rejectedCallback()
          }
        )
      }
    }
  })
}

/***
 * @author lihh
 * @description 返回一个promise的状态，无论是成功还是失败
 * @param allPromise 表示所有的promise
 */
Promise.race = function (allPromise = []) {
  return new Promise((resolve, reject) => {
    let i = 0
    for (; i < allPromise.length; i += 1) {
      const item = allPromise[i]

      if (!isPromise(item)) {
        return resolve(item)
      } else {
        item.then(resolve, reject)
        return
      }
    }
  })
}

/**
 * @author lihh
 * @description 直接返回一个具有失败状态的 promise
 * @param params 传递参数
 * @returns {Promise}
 */
Promise.reject = function (params) {
  return new Promise((_, reject) => {
    reject(params)
  })
}

/**
 * @author lihh
 * @description 直接返回一个具有成功状态的promise
 * @param params 传递参数
 * @returns {Promise}
 */
Promise.resolve = function (params) {
  return new Promise((resolve) => {
    resolve(params)
  })
}

/**
 * @author lihh
 * @description promise中断方法
 * @param userPromise 用户自己promise
 */
Promise.abort = function (userPromise) {
  let abort
  const innerPromise = new Promise((_, reject) => {
    abort = reject
  })

  const racePromise = Promise.race([userPromise, innerPromise])
  racePromise.abort = abort
  return racePromise
}

module.exports = Promise
