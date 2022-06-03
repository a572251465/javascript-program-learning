function callAsync(fn, n) {
  // 异步调用结果 是通过回调来完成的
  setTimeout(() => fn(2 * n), 1000)
}

callAsync((result) => {
  console.log(result)
}, 10)
