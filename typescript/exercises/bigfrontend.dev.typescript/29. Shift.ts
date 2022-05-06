type Shift<T extends any[]> = T extends [infer A, ...infer B] ? B : []

type A = Shift<[1, 2, 3]> // [2,3]
type B = Shift<[1]> // []
type C = Shift<[]> // []

export default {}
