;(function () {
  var root = this

  const SymbolPolyfill = function Symbol(description) {
    if (this instanceof SymbolPolyfill) throw TypeError('Symbol is not a constructor')

    const descString = description === undefined ? description : String(description)
    const symbol = Object.create(null)

    Object.defineProperty(symbol, {
      __Description__: {
        value: descString,
        writable: false,
        enumerable: false,
        configurable: false
      }
    })

    return symbol
  }
})()
