type LastItem<T, Prev = never> = T extends [infer A, ...infer B]
  ? LastItem<B, A>
  : Prev

type A = LastItem<[string, number, boolean]> // boolean
type B = LastItem<['B', 'F', 'E']> // 'E'
type C = LastItem<[]> // never
export default {}
