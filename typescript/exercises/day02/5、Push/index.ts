// 在元组类型T中添加新的类型I

type Push<T extends any[], K extends number> = [...T, K]

type A = Push<[1,2,3], 4> // [1,2,3,4]
type B = Push<[1], 2> // [1, 2]

export default {}
