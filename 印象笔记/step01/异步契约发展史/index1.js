const p = new Promise((resolve, reject) => {
  // 通过函数resolve 已经将契约修改成为了成功态。再次调用修改状态已经无任何意义
  resolve(111)
  reject()
})

// 每次在then后面调用方法 其实都是一个新的promise
p.then((res) => {
  console.log(res)
  return res + 1
})
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.log(err)
  })
