let messagePort = null

function factorial(n) {
  let result = 1
  while (n) {
    result *= n--
  }
  return result
}

self.onmessage = ({ ports }) => {
  if (!messagePort) {
    messagePort = ports[0]

    self.onmessage = null
    messagePort.onmessage = ({ data }) => {
      messagePort.postMessage(`${data} != ${factorial(data)}`)
    }
  }
}
