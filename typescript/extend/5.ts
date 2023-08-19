// class Animal {
//   protected constructor(protected name: string) {
//     this.name = name
//   }
// }
//
// class Dog extends Animal {
//   constructor(public age: number) {
//     super('lihh')
//   }
//
//   getParentName(): string {
//     return this.name
//   }
// }
//
// const dog = new Dog(20)
// console.log(dog.getParentName())

// class Animal {
//   public name: string
//   public age: number
//   constructor(name: string, age: number) {
//     this.name = name
//     this.age = age
//   }
// }

// class Animal {
//   static address: string = '22'
//   private _phone!: string
//   get phone() {
//     return this._phone
//   }
//   set phone(value: string) {
//     this._phone = value
//   }
//   constructor(public name: string, public age: number) {}
// }
// const animal = new Animal('lihh', 20)
// console.log(animal.age)

// class Animal {
//   private _phone!: string
//   static address: string = 'jn'
//
//   get phone(): string {
//     return this._phone
//   }
//   set phone(value: string) {
//     this._phone = value
//   }
// }

abstract class Animal {
  protected constructor(public name: string) {}

  static address: string = 'jn'

  abstract eat(name: string): string
  say() {
    return 'need say'
  }
}

class Dog extends Animal {
  constructor() {
    super('lihh')
  }
  eat(): string {
    return 'eat'
  }
}

const dog = new Dog()
console.log(Dog.address)
console.log(dog.say())

export default {}
