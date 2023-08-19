export namespace A {
  export class Dog {}
}

export namespace B {
  export class Dog {}
}

console.log(A.Dog)
console.log(B.Dog)

// 合并类
class Animal {
  static b = 'cat'
}
namespace Animal {
  export const a = 'dog'
}

console.log(Animal.a)

// 方法合并
function count(): number {
  return count.counter++
}
namespace count {
  export let counter: number = 0
}

enum Menu {
  one
}
namespace Menu {
  export let two = 1
}


export {}
