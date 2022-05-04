// 移除元组类型中的第一个类型

type Shift<T extends any[]> = T extends [] ? T : T extends [infer A, ...infer B] ? B : never

type A = Shift<[1, 2, 3]> // [2,3]
type B = Shift<[1]> // []
type C = Shift<[]> // []

export default {}
