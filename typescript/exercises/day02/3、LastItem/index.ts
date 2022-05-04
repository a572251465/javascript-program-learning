// 得到元组类型中的最后一个元素

type LastItem<T = any[], P = never> = T extends [infer A, ...infer B] ? LastItem<B, A> : P

type A = LastItem<[string, number, boolean]> // boolean
type B = LastItem<['B', 'F', 'E']> // 'E'
type C = LastItem<[]> // never

export default {}
