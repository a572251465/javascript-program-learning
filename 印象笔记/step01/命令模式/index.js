const menuBar = {
  refresh: function (value) {
    console.log('表示刷新界面', value)
  }
}

let count = 0
const commandStack = []

const makeCommand = function (receiver, value) {
  return function () {
    receiver.refresh(value)
  }
}

function start() {
  let timer = setInterval(function () {
    const command = makeCommand(menuBar, count++)
    if (command) {
      commandStack.push(command)
      command()
    }
    if (count >= 5) {
      clearInterval(timer)
      let command
      while ((command = commandStack.pop())) {
        command()
      }
    }
  }, 1000)
}
start()
