function foo(this: { a: string }) {}
// foo() // Error

const bar = foo.bind({ a: 'BFE.dev' })
bar() // OK

type OmitThisParameter<T> = unknown extends ThisParameterType<T>
  ? T
  : T extends (...args: infer A) => infer R
  ? (...args: A) => R
  : T

type MyOmitThisParameter<T extends (...args: any[]) => any> = T extends (
  this: infer A,
  ...args: infer B
) => infer C
  ? (...args: B) => C
  : never
type Foo = (this: { a: string }) => string
type Bar = MyOmitThisParameter<Foo> // () => string

export default {}

// type a = Omit
