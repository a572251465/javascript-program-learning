const windowOpen = window.open
window.open = function (...args) {
  let windowName = ''
  if (args.length >= 2) windowName = args[1]
  const newWindow = windowOpen(...args)

  if (windowName === 'sandBox' && newWindow !== null) {
    newWindow.onload = () => {
      try {
        newWindow.document.body.style.backgroundColor = 'black'
      } catch (e) {
        console.error(e)
        console.warn('样式添加失败')
      }
    }
  }
  return newWindow
}
