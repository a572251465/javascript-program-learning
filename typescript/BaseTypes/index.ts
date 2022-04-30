let age: number
age = 10

let name = 'lihh'

let isSure: boolean
isSure = false

let test: number | string
test = '1'
test = 1

// string是基本类型 String是包装对象类型 string => String 因为string是String的实例 所以可以赋值
let str1: String = '1'
let str2: String = new String('1')
let str3: string = '2'
// let str4: string = new String('2')

let arr: string[] = ['1', '2']
let arr1: [string, number] = ['1', 2]
let arr2: Array<number> = [1, 2]

let un: undefined = undefined
let nul: null = null

let a: any = 1

let b: string = a
let c: boolean = a

const enum typ1 {
  add = 'add',
  minus = 'minus',
  mult = 'mult',
  divis = 'divis'
}

const enum typ2 {
  add = 'add',
  minus = 'minus',
  add1 = 1,
  add2
}
console.log(typ1.add)

let test1: number | never
function fn(): never {
  while (true) {}
}
let test2: never = fn()
let test3: number = test2
let test4: any = test2

let obj: object = {}
export {}
