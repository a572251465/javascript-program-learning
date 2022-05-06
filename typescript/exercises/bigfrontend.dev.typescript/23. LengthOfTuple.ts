type LengthOfTuple<T extends any[]> = T['length']
// your code here

type A = LengthOfTuple<['B', 'F', 'E']> // 3
type B = LengthOfTuple<[]> // 0

export default {}
