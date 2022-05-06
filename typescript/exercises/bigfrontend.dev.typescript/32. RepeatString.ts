type RepeatString<
  T extends string,
  C extends number,
  S extends string = '',
  D extends any[] = []
> = C extends D['length'] ? S : RepeatString<T, C, `${T}${S}`, [...D, T]>

type A = RepeatString<'a', 3> // 'aaa'
type B = RepeatString<'a', 0> // ''
export default {}
