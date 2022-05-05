type MyReturnType<T extends (...args: any[]) => any> = T extends (
  ...args: any[]
) => infer R
  ? R
  : never

type Foo = () => { a: string }

type A = MyReturnType<Foo> // {a: string}

export default {}
