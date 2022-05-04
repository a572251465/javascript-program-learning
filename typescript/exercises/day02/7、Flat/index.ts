// 拍平元组

type Flat<T, S extends any[] = []> = T extends [infer L, ...infer R] ? (
  L extends any[] ? Flat<[...L, ...R], S> : Flat<R, [...S, L]>
) : S

type A = Flat<[1, 2, 3]> // [1,2,3]
type B = Flat<[1, [2, 3], [4, [5, [6]]]]> // [1,2,3,4,5,6]
type C = Flat<[]> // []
type D = Flat<[1]> // [1]

export default {}
