type MyReadonly<T> = {
  readonly [P in keyof T]: T[P]
}
// your code here, please don't use Readonly<T> in your code

export default {}
