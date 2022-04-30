// import $ from 'jquery'

$().css('')
$.fn.extend()

interface IPerson {
  name: string
  age: number
}
type A = keyof IPerson

type B = keyof string

type C = keyof any

type D = keyof never

type E = keyof unknown

// 条件 extends 分发/ [T] 限制纷分发
interface Bird {
  name: '鸟'
}
interface Sky {
  name: '蓝色'
}
interface Fish {
  name: '鱼'
}
interface Water {
  color: '透明'
}
type MyType<T extends Bird | Fish> = T extends Bird ? Sky : Water
type MyType1<T extends Bird | Fish> = [T] extends Bird ? Sky : Water
type IEnv = MyType<Bird>

type IEnv2 = MyType1<Bird | Fish>

// 分发必须满足 联合类型 以及裸类型中
// Exclude 排除
type Exclude<T, K> = T extends K ? never : T
type F = Exclude<string | number | boolean, boolean>
// 抽离
type Extract<T, K> = T extends  K ? T : never
type F1 = Extract<string | number | boolean, boolean | string>
// NonNullable 非空判断
type NonNullable<T> = T extends null | undefined ? never : T
type F2 = NonNullable<string>
// Partial
interface F3  {
  name: string,
  age: number
}

type Partial<T> = {
  [P in keyof T]?: T[P]
}
type F4 = Partial<F3>
// DeepPartial
interface F5 {
  name: string,
  age: number,
  school: {
    name: string,
    address: string
  }
}
type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]>: T[P]
}
type F6 = DeepPartial<F5>
  // readonly
interface F7 {
  name: string,
  age: number
}
type Readonly<T> = {
  readonly [P in keyof T]: T[P]
}
type F8 = Readonly<F7>
// Required
interface F9 {
  name?: string,
  age?: number
}
type Required<T> = {
  [P in keyof T]-?: T[P]
}
type F10 = Required<F9>
// in 循环
// 部分属性可选 部分属性不可选
// pick 精挑细选
interface F13 {
  name: string,
  age: number,
  address: string
}
type Pick<T, K extends keyof T> = {
  [P in K]: T[P]
}
type F14 = Pick<F13, 'name'>
// omit 忽略
interface F11 {
  name: string,
  age: number,
  address: string
}
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
type F12 = Omit<F11, 'name'>

type Merge<T extends object, K extends object> = Omit<T, Extract<keyof T, keyof K>> & K
// merge 实现
const fn = <T extends object, K extends object>(a: T, b: K): Omit<T, Extract < keyof T, keyof K>> & K => {
  return {...a, ...b}
}
const res = fn({a: 1, b: 2}, {a: '1', c: 2})

// 部分可选 部分不可选
interface F15 {
  name:string,
  age: number,
  address: string
}

type PartPartial<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>
type F16 = PartPartial<F15, 'name'>

// 兼容性
// 联合类型兼容性
type P1 = string | number
type P2 = string
let a!:P1
let b!: P2
// b = a

// interface兼容性
interface P3 {
  name: string,
  age: number
}
interface P4 {
  name: string
}
let c!: P3
let d!: P4
// 函数兼容性
// c = d // error
d = c // success

// 函数的兼容性
type IFn1 = (a: string, b: string) => string
type IFn2 = (a: string) => string
type IFn3 = (info: {name: string, age: number}) => string
type IFn4 = (info: {name: string}) => string

let t1!: IFn1
let t2!: IFn2

let t3!: IFn3
let t4!: IFn4
// t1 = t2 // success
// t2 = t1 // error

// t3 = t4
// t4 = t3

type IFn5 = (name: string) => string
type IFn6 = (name: string) => string | number

let t5!: IFn5
let t6!: IFn6

// t5 = t6
// t6 = t5

// infer
// 推导函数/ 参数/ 返回值
const fns = (a: string, b: number) => {
  return {
    a,
    b,
    name: '1'
  }
}

type ReturnType<T extends (...args: any[]) => any> = T extends (...args: any[]) => infer R ? R : never
type m1 = ReturnType<typeof fns>

type Parameters<T extends (...args: any[]) => any> = T extends (...args: infer P) => any ? P : never
type m2 = Parameters<typeof fns>
// 推导类

// unknown

// 命名空间
// 类和命名空间 可以进行合并
class Person {}
namespace Person {
  export var action: string
}
const p = new Person
Person.action

// 命名空间 可以跟函数一起合并
function User() {

}
namespace User {
  export const name = '1'
}
User.name

// 命名空间 可以和枚举类型进行合并
enum IAction {
  add = 'add'
}
namespace IAction {
  export const del = 'del'
}
IAction.del

// 同名的命名空间可以合并

// declare
declare interface String {
  xxx(value: string): void
}
// String.prototype.xxx('')

window.store

export {}
