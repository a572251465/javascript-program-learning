// 复制类型T为C个元素的元组类型

// type Repeat<T, K extends number, R extends any[] = []> = K extends R['length'] ? R : (
//   Repeat<T, K, [...R, T]>
// )

type Repeat<T, K, TT extends any[] = []> = TT["length"] extends K ? TT : Repeat<T, K, [...TT, T]>

type A = Repeat<number, 3> // [number, number, number]
type B = Repeat<string, 2> // [string, string]
type C = Repeat<1, 1> // [1]
type D = Repeat<0, 0> // []

export default {}
