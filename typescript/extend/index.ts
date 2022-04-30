// 断言
const app: HTMLElement | null = document.getElementById('app')
app!.style.background = 'red'

// 交集

type A = {
  name: string
}
type B = {
  age: number
}
type C = A & B
const c: C = { name: 'test', age: 10 }

type PersonA = { name: string; age: number }
type PersonB = { name: string; work: boolean }

type PersonC = PersonA | PersonB

let d: PersonC = { name: '', age: 10, work: true }

// 并集
export {}
