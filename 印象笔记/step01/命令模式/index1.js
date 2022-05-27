const Ryu = {
  attack: function () {
    console.log('攻击')
  },
  defense: function () {
    console.log('防御')
  },
  jump: function () {
    console.log('跳跃')
  },
  crouch: function () {
    console.log('蹲下')
  }
}

const makeCommand = function (receiver, state) {
  return function () {
    receiver[state]()
  }
}

const commands = {
  119: 'jump',
  115: 'crouch',
  97: 'defense',
  100: 'attack'
}

const commandStack = []

document.onkeypress = function (ev) {
  const keyCode = ev.keyCode
  // 把命令封装成方法，直接调用
  const command = makeCommand(Ryu, commands[keyCode])

  if (command) {
    command()
    // 将执行的命令放入命令栈中
    commandStack.push(command)
  }
}

// 相当于撤回操作
document.getElementById('replay').onclick = function () {
  let command
  while ((command = commandStack.shift())) {
    command()
  }
}
