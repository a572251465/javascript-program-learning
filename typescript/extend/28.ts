function getInfo(name: string, age: number) {
  return {
    name,
    age
  }
}
const person = {
  name: 'lihh',
  age: 20
}


type IFn = typeof getInfo
type IPerson = typeof person


export default {}
