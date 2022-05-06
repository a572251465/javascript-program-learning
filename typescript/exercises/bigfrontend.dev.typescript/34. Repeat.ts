type Repeat<T, C extends number, R extends any[] = []> = C extends R['length']
  ? R
  : Repeat<T, C, [...R, T]>

type A = Repeat<number, 3> // [number, number, number]
type B = Repeat<string, 2> // [string, string]
type C = Repeat<1, 1> // [1, 1]
type D = Repeat<0, 0> // []

export default {}
