type Push<T extends any[], I> = [...T, I]

type A = Push<[1, 2, 3], 4> // [2,3]
type B = Push<[1], 2> // [1, 2]
type C = Push<[], string> // [string]

export default {}
