
// 进行webSocket 连接
const ws = new WebSocket("ws://localhost:3000")

// 实现消息监听
ws.onmessage = (data) => {
  ws.send(window.location.href)
  window.location.reload()
}
