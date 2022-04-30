// 声明类
class Person {
  constructor(name: string, age: string) {
    // this.name = name
    // this.age = age
  }
}

class Person1 {
  constructor(public name: string, public age: string) {
    this.name = name
    this.age = age
  }
}

class Person2 {
  name: string
  age: string
  constructor(name: string, age: string) {
    this.name = name
    this.age = age
  }
}
// 属性修饰符 public/ private protected readonly  限制构造函数private protected

// 定义原型属性 使用get

// 定义静态属性

// 父子类 原型函数重载，父类的返回值void 表示不关心返回值类型

class Man {
  public name: string
  readonly age: number
  protected school: string = '学校'
  constructor(name: string, public test: string) {
    this.name = name
    this.age = 10
  }
}

class Man1 {
  private constructor(public name: string) {
    this.name = name
  }
}

// const man1 = new Man1('tset')

class Cat {
  constructor(public name: string) {
    // 实例属性
    this.name = name
  }

  // 原型函数
  eat(kind: string): string {
    return kind
  }

  // 静态函数
  static say(): string {
    return 'say'
  }

  // 实例属性
  get age(): number {
    return 10
  }
}

const cat = new Cat('test')

abstract class Woman {
  abstract eat(kind: string): string

  say(content: string): string {
    return content
  }
}

class Person3 extends Woman {
  eat(kind: string): string {
    return kind
  }
}

export {}
