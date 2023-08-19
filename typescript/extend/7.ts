type Info = { name: string } & { age: number }

const person: Info = {
  name: 'lihh',
  age: 20
}

interface ICounter {
  (): void
  count: number
}
const counter: ICounter = (): void => {
  counter.count++
}
counter.count = 0
counter()

export default {}
