type StringToTuple<
  T extends string,
  S extends any[] = []
> = T extends `${infer A}${infer B}` ? StringToTuple<B, [...S, A]> : S

type A = StringToTuple<'BFE.dev'> // ['B', 'F', 'E', '.', 'd', 'e','v']
type B = StringToTuple<''> // []

export default {}
