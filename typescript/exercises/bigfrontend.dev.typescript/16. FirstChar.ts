type FirstChar<T extends string> = T extends `${infer A}${infer B}` ? A : never
// your code here

type A = FirstChar<'BFE'> // 'B'
type B = FirstChar<'dev'> // 'd'
type C = FirstChar<''> // never

export default {}
