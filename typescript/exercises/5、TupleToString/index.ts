// 将字符串类型的元素转换为字符串字面量类型

type TupleToString<T, S extends  string = ''> = T extends [infer L, ...infer R] ? (
  L extends string ? TupleToString<R, `${S}${L}`> : never
) : S

type A = TupleToString<['a', 'b', 'c']> // 'abc'
type B = TupleToString<[]>              // ''
type C = TupleToString<['a']>           // 'a'

export default {}
