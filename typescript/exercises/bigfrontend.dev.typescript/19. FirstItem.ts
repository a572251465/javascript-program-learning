type FirstItem<T extends any[]> = T extends [FItem: infer A, ...args: any[]]
  ? A
  : never

type A = FirstItem<[string, number, boolean]> // string
type B = FirstItem<['B', 'F', 'E']> // 'B'

export default {}
