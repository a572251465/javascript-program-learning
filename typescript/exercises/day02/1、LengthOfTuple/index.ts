// 计算元组类型的长度

type LengthOfTuple<T extends any[]> = T['length']

type A = LengthOfTuple<['B', 'F', 'E']> // 3
type B = LengthOfTuple<[]> // 0

export default {}
