let name: string = '111'
let str = new String('222')
const str1: String = new String('111')

class Dog {}

const dog = new Dog()

const arr1: [string, number, boolean] = ['1', 2, false]
const item1 = arr1[2]
arr1.push('222')
// arr1.push({}) // TS2345: Argument of type '{}' is not assignable to parameter of type 'string | number | boolean'
// console.log(arr1[3]) // TS2493: Tuple type '[string, number, boolean]' of length '3' has no element at index '3'.

const arr2 = [1, '2', false]
const item = arr2[0]

let n1: null = null
let n2: undefined = undefined

n1 = undefined // TS2322: Type 'undefined' is not assignable to type 'null'.
n2 = null // TS2322: Type 'null' is not assignable to type 'undefined'.

interface Person {
  name: string
  age: number
  address: string
}

type a = Omit<Person, 'name'>

type b = Exclude<keyof Person, 'name'>

const recoreds: Record<string, string> = {}
type anys = keyof any

let test: never
let test1: string = test

function fn1(): never {
  while (true) {}
}
function fn2(): never {
  throw new Error()
}

const big = BigInt(Number.MAX_VALUE)
console.log(big)

const person = { name: 'chendd', age: 20 }
const fn3 = (a: string, b: string) => {
  return a + b;
}
type IFN3 = typeof fn3;
type IPerson = typeof person




export default {}
