// function User() {
//   this.key = '1'
// }

// function User() {}
// User.prototype.key = "1"

function Man() {
  this.key = "1"
}

function User() {}

const user = new User()
console.log(Object.prototype.hasOwnProperty.call(user, 'key'))
