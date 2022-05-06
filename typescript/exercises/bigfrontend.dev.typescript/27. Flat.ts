type Flat<T extends any[], R extends any[] = []> = T extends [
  infer A,
  ...infer B
]
  ? A extends any[]
    ? Flat<[...A, ...B], R>
    : Flat<B, [...R, A]>
  : R

type A = Flat<[1, 2, 3]> // [1,2,3]
type B = Flat<[1, [2, 3], [4, [5, [6]]]]> // [1,2,3,4,5,6]
type C = Flat<[]> // []

let b: B = []

export default {}
