function Parent(age) {
  this.name = 'lihh'
  this.age = age
  this.getAddress = function () {
    return this.address
  }
}

function Son() {
  Parent.call(this, 22)
  this.address = '1111'
}

const s = new Son
console.log(s.getAddress())
