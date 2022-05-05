class Foo {
  constructor(a: string, b: number, c: boolean) {}
}
// type Foo = (a: string) => boolean;

type MyConstructorParameters<T extends abstract new (...args: any[]) => any> =
  T extends abstract new (...args: infer P) => any ? P : never

type C = MyConstructorParameters<typeof Foo>

export default {}
