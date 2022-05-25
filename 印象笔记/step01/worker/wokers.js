// setTimeout(() => {
//   self.postMessage('你好')
// }, 500)

// 监听事件变化
self.addEventListener('message', function (message) {
  console.log(self)
  console.log(message)
})
