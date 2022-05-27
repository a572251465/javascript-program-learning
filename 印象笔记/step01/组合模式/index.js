const MacroCommand = function () {
  return {
    commandsList: [],
    add: function (command) {
      this.commandsList.push(command)
    },
    execute: function () {
      this.commandsList.forEach(function (command) {
        command.execute()
      })
    }
  }
}

const openAcCommand = {
  execute: function () {
    console.log('打开空调')
  }
}

const openTvCommand = {
  execute: function () {
    console.log('打开电视')
  }
}

const openSoundCommand = {
  execute: function () {
    console.log('打开音响')
  }
}

const macroCommand1 = MacroCommand()
macroCommand1.add(openTvCommand)
macroCommand1.add(openSoundCommand)

const closeDoorCommand = {
  execute: function () {
    console.log('关门')
  }
}

const openPcCommand = {
  execute: function () {
    console.log('打开电脑')
  }
}

const openQQCommand = {
  execute: function () {
    console.log('打开QQ')
  }
}

const macroCommand2 = MacroCommand()
macroCommand2.add(closeDoorCommand)
macroCommand2.add(openPcCommand)
macroCommand1.add(openQQCommand)

const macroCommand = MacroCommand()
macroCommand.add(openAcCommand)
macroCommand.add(macroCommand1)
macroCommand.add(macroCommand2)

macroCommand.execute()
