const app = {
  fns: [],
  use: function (fn) {
    this.fns.push(fn)
  },
  run: function () {
    const next = (index) => {
      if (index === this.fns.length) return
      const fn = this.fns[index]
      fn(() => {
        next(++index)
      })
    }
    next(0)
  }
}

app.use(function (next) {
  console.log('111')
  next()
  console.log('444')
})
app.use(function (next) {
  console.log('222')
  next()
  console.log('333')
})

app.run()
