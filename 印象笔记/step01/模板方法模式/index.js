function Person() {}
Person.prototype.boilWater = function () {
  console.log('把水煮沸')
}

Person.prototype.brew = function () {}
Person.prototype.pourInCup = function () {}
Person.prototype.addCondiments = function () {}

Person.prototype.init = function () {
  this.boilWater()
  this.brew()
  this.pourInCup()
  this.addCondiments()
}

function User() {}
User.prototype = Object.create(new Person())

User.prototype.brew = function () {
  console.log('用水冲泡咖啡')
}
User.prototype.pourInCup = function() {
  console.log('将咖啡倒进杯子中')
}
User.prototype.addCondiments = function() {
  console.log('加糖和牛奶')
}

const u = new User()
u.init()
