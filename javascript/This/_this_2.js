var value = 11

var aInfo = {
  value: 10,
  getValue: () => {
    return this.value
  }
}

var bInfo = {
  value: 12,
  getValue: () => {
    return this.value
  }
}

console.log(aInfo.getValue()) // 11
console.log(bInfo.getValue()) // 11
console.log((bInfo.getValue = aInfo.getValue)()) // 11
