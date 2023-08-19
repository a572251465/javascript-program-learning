interface Person {
  name: string,
  age: number,
  sex: boolean
}


type res = Person[keyof Person]

type x = never & undefined
type x1 = never | undefined


export default {}