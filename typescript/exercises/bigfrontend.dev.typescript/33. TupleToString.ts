type TupleToString<T extends string[], R extends string = ''> = T extends [
  infer A,
  ...infer B
]
  ? B extends string[]
    ? TupleToString<B, `${R}${A & string}`>
    : R
  : R

type A = TupleToString<['a']> // 'a'
type B = TupleToString<['B', 'F', 'E']> // 'BFE'
type C = TupleToString<[]> // ''

export default {}
