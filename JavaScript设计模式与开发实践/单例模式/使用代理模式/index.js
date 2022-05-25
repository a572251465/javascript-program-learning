function CreateDiv(html) {
  this.html = html

  this.init()
}

CreateDiv.prototype.init = function () {
  const el = document.createElement('div')
  el.innerHTML = this.html
  document.body.appendChild(el)
}

const proxySingleCreateDiv = (function () {
  let instance
  return function (html) {
    if (!instance) {
      instance = new CreateDiv(html)
    }
    return instance
  }
})()

const a = new proxySingleCreateDiv('span1')
const b = new proxySingleCreateDiv('span2')
console.log(a === b)
