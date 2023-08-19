const events = ['debug', 'error', 'info', 'log', 'warn']
const targetConsole = window.console

events.forEach((event) => {
  window.console[event] = function (...args) {
    console.log('我找到了.................')
    targetConsole[event](...args)
  }
})
