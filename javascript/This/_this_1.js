var value = 11

var aInfo = {
  value: 10,
  getValue: function () {
    return this.value
  }
}

var bInfo = {
  value: 12,
  getValue: function () {
    return this.value
  }
}

console.log(aInfo.getValue()) // 10
console.log(bInfo.getValue()) // 12
console.log((bInfo.getValue = aInfo.getValue)()) // 11
