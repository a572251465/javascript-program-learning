import './style.css'
import fastDom from 'fastdom'

const app = document.querySelector<HTMLDivElement>('#app')!

window.onload = function () {
  setTimeout(() => {
    for (let i = 0; i < 10; i += 1) {
      fastDom.measure(() => {
        const { offsetLeft } = app
        fastDom.mutate(() => {
          app.style.left = `${offsetLeft + 100}px`
        })
      })
    }
  }, 2000)
}
