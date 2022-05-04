// your code here, please dont use Parameters<T> in your code
type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer P) => any ? P : never

// type Foo = (a: string, b: number, c: boolean) => string
// type A = MyParameters<Foo> // [a:string, b: number, c:boolean]
// type B = A[0] // string
// type C = MyParameters<{a: string}> // Error
export default {}
