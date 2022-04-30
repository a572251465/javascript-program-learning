// type 以及interface 区别

interface IPerson {
  name: string
  age: number
}
const person: IPerson = {
  name: '',
  age: 10
}

// 可选属性
interface ITest {
  name: string
  age?: number
}

// 可获取
interface IPerson1 {
  [keyName: string]: any
}

// 可索引
interface IPerson2 {
  [keyName: number]: any
}

// 继承
interface A {
  name: string
}

interface B extends A {
  age: number
}
let b: B = {
  age: 10,
  name: ''
}

// interface 赋值具有兼容性处理。 处于安全的考虑 多的可以给少的赋值
// class 描述类 构造函数

// interface IClass {
//   new (...args: any[]): any
//   eat: () => void
// }
// class A implements IClass {
//   constructor() {}
//   eat() {}
// }

interface IEat {
  eat(): void // 原型方法
  eat: () => void // 实例方法
}

// 泛型 泛型约束
const mapArray: IMapArray = (value, times) => {
  const arr = []

  for (let i = 0; i < arr.length; i += 1) {
    arr.push(value)
  }
  return arr
}
const res = mapArray<string>('111', 3)

interface IMapArray {
  <T>(value: T, times: number): T[]
}

function mapArray1<T>(value: T, times: number) {
  const arr = []

  for (let i = 0; i < arr.length; i += 1) {
    arr.push(value)
  }
  return arr
}
const res1 = mapArray<string>('111', 3)

const getLen = <T extends {length: number}>(obj: T): number {
  return obj.length
}

// keyof
const getValue = <T extends object, K extends keyof T>(obj: T, key: K) => {
  return obj[key]
}

export {}
