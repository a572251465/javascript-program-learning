type ReverseTuple<T extends any[], S extends any[] = []> = T extends [
  infer A,
  ...infer B
]
  ? ReverseTuple<B, [A, ...S]>
  : S

type A = ReverseTuple<[string, number, boolean]> // [boolean, number, string]
type B = ReverseTuple<[1, 2, 3]> // [3,2,1]
type C = ReverseTuple<[]> // []

export default {}
