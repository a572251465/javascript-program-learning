type LengthOfString<
  T extends string,
  S extends any[] = []
> = T extends `${infer A}${infer B}`
  ? LengthOfString<B, [...S, A]>
  : S['length']

type A = LengthOfString<'BFE.dev'> // 7
type B = LengthOfString<''> // 0

export default {}
